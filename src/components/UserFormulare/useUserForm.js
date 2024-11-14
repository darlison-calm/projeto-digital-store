import { useState, useEffect } from 'react';
import axios from 'axios';
import userSchema from './validarSenha'; // Importa o schema de validação Joi

export const calculatePasswordStrength = (password) => {
    let strength = {
        level: 'very weak', // 'very weak', 'weak', 'medium', 'strong'
        percentage: 3,
    };

    if (password.length < 6) {
        strength.level = 'very weak';
        strength.percentage = 10;
    } else {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        let score = 0;

        if (hasUpperCase) score++;
        if (hasLowerCase) score++;
        if (hasNumbers) score++;
        if (hasSpecialChars) score++;

        // Definindo o nível de força da senha com base no score
        if (score === 4) {
            strength.level = 'strong';
            strength.percentage = 100;
        } else if (score === 3) {
            strength.level = 'medium';
            strength.percentage = 60;
        } else if (score === 2) {
            strength.level = 'weak';
            strength.percentage = 30;
        } else {
            strength.level = 'very weak';
            strength.percentage = 10;
        }
    }

    return strength;
};

// Hook customizado para controlar o estado e a validação do formulário
export function useUserForm() {
    // Estado para armazenar os erros de validação
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    // Estado para os dados do formulário
    const [formData, setFormData] = useState({
        firstname: '',
        surname: '',
        email: '',
        password: '',
        confirmpassword: '',
    });

    // Função para lidar com a mudança nos campos do formulário
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Função para validar em tempo real
    useEffect(() => {
        const { error } = userSchema.validate(formData, { abortEarly: false });

        if (error) {
            const errorMessages = error.details.reduce((acc, curr) => {
                acc[curr.path[0]] = curr.message;
                return acc;
            }, {});
            setErrors(errorMessages);
        } else {
            setErrors({}); // Limpa os erros quando tudo está válido
        }
    }, [formData]); // Toda vez que o formData mudar, realiza a validação

    const validateField = (name) => {
        const newErrors = { ...errors };

        switch (name) {
            case 'firstname':
                if (!formData.firstname) {
                    newErrors.firstname = 'O nome não pode estar vazio.';
                }
                break;
            case 'surname':
                if (!formData.surname) {
                    newErrors.surname = 'O sobrenome não pode estar vazio.';
                }
                break;
            case 'email':
                if (!formData.email) {
                    newErrors.email = 'O e-mail não pode estar vazio.';
                }
                break;
            case 'password':
                if (!formData.password) {
                    newErrors.password = 'A senha não pode estar vazia.';
                }
                break;
            case 'confirmpassword':
                if (!formData.confirmpassword) {
                    newErrors.confirmpassword = 'A confirmação de senha não pode estar vazia.';
                } else if (formData.confirmpassword !== formData.password) {
                    newErrors.confirmpassword = 'As senhas não coincidem.';
                }
                break;
            // Adicione validações para outros campos conforme necessário
            default:
                break;
        }

        setErrors(newErrors);
    };

    // Função chamada ao perder o foco do campo para validar
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
        validateField(name); // Chamando a validação do campo
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        // Validação com Joi
        const { error } = userSchema.validate(formData, { abortEarly: false });

        if (error) {
            // Caso haja erros, extraímos as mensagens
            const errorMessages = error.details.reduce((acc, curr) => {
                acc[curr.path[0]] = curr.message;
                return acc;
            }, {});
            setErrors(errorMessages);
        } else {
            // Se a validação passar, podemos enviar os dados para o backend
            const { confirmpassword, ...dataToSend } = formData;  // Remover 'confirmpassword' aqui

            try {
                const response = await axios.post('http://localhost:3000/users', dataToSend, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log('Resposta do servidor:', response);
            } catch (error) {
                if (error.response) {
                    console.error('Erro da resposta:', error.response.data);
                    alert(`Erro: ${error.response.data.message || 'Ocorreu um erro no servidor.'}`);
                } else {
                    console.error('Erro ao enviar dados:', error);
                    alert('Erro ao enviar os dados');
                }
            }
        }
    };


    return {
        formData,
        errors,
        touched,
        handleInputChange,
        handleBlur,
        handleSubmit,
        calculatePasswordStrength,
    };
}

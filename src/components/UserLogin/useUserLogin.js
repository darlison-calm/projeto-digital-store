import axios from 'axios';

export function useUserLogin() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3000/users/login', user);
        console.log(response.data);

    }

    return {
        handleSubmit
    }
}
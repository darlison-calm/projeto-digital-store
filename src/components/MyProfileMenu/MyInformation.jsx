import React, { useEffect, useState } from 'react';
import './MyProfileMenu.css'

export function MyInformation() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Parse para transformar de string em objeto
        }
    }, []);

    if (!user) {
        return <p>Sem informações de usuário, faça login</p>;
    }

    return (
        <div className="myinformation-container">
            <h4 className="myinformation-title">Minhas Informações</h4>
            <hr />

            <section className="personal-info">
                <h5 className="myinformation-section-title">Informações Pessoais</h5>
                <div className="info-group">
                    <label className="info-label">Nome:</label>
                    <span className="info-value">{`${user.firstname} ${user.surname}`}</span>
                </div>
                <div className="info-group">
                    <label className="info-label">E-mail:</label>
                    <span className="info-value">{user.email}</span>
                </div>
            </section>
        </div>
    );
}

export default MyInformation;
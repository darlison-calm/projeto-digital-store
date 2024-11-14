import '@globalStyles/ColorsVariables.css'
import '../../globalStyles/reset.css'
import './UserLogin.css'

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const UserLogin = () => {
    return (
        <>
            <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Row className="w-100">
                    <Col md={6} lg={4} className="mx-auto">
                        <div className="text-center mb-4">
                            <h3>Acesse sua conta</h3>
                            <p>Novo cliente? Então registre-se <a href="http://localhost:5173/cadastro">aqui</a>.</p>
                        </div>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Login</Form.Label>
                                <Form.Control type="email" placeholder="Insira seu login ou email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Insira sua senha" />
                            </Form.Group>
                            <div className='esqueci_senha'>
                                <p>Esqueci minha senha</p>
                            </div>
                            <Button variant="primary" type="submit" className="ButtonUserLogin">
                                Entrar
                            </Button>
                            <div>
                                <p>Ou faça login com</p>
                                <button className="image_icon" style={{ backgroundImage: 'url(src/assets/email.svg)' }} />
                                <button className="image_icon" style={{ backgroundImage: 'url(src/assets/facebook-color.svg)' }} />
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default UserLogin;
import '@globalStyles/ColorsVariables.css'
import '../../globalStyles/reset.css'
import './UserLogin.css'

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const UserLogin = () => {
    return (
        <>
        <div className='login_back'>
            <Container fluid className="login_container">
                <Row className="login_row">
                    <Col md={8} lg={6} className="login_col">
                        <div className="text_center">
                            <h3>Acesse sua conta</h3>
                            <p>Novo cliente? Então registre-se <a href="http://localhost:5173/cadastro">aqui</a>.</p>
                        </div>
                        <Form className='login_form'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className='lg_form_label'>Login *</Form.Label>
                                <Form.Control className='lg_form_placeholder' type="email" placeholder="Insira seu login ou email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className='lg_form_label'>Senha *</Form.Label>
                                <Form.Control className='lg_form_placeholder' type="password" placeholder="Insira sua senha" />
                            </Form.Group>
                            <div className='esqueci_senha'>
                                <a href='#'>Esqueci minha senha</a>
                            </div>
                            <Button variant="primary" type="submit" className="ButtonUserLogin">
                                Acessar Conta
                            </Button>
                            <div className='diferent_login'>
                                <p>Ou faça login com</p>
                                <button className="gmail_icon" style={{ backgroundImage: 'url(src/assets/gmail.svg)' }} />
                                <button className="facebook_icon" style={{ backgroundImage: 'url(src/assets/facebook-color.svg)' }} />
                            </div>
                        </Form>
                    </Col>
                    <div className="img_login">
                        <img src="../../../public/login-image.png" alt="Shoes"/>
                    </div>
                </Row>
            </Container>
        </div>
        </>
    );
}

export default UserLogin;
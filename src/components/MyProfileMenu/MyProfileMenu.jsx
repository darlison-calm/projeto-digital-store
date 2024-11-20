import '@globalStyles/ColorsVariables.css'
import '../../globalStyles/reset.css'
import './MyProfileMenu.css'
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import MyOrders from './MyOrders.jsx'
import MyInformation from './MyInformation.jsx'
import PaymentMethods from './PaymentMethods.jsx'

export function MyProfileMenu() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="meus-pedidos">
            <Row className="my-profile-menu">
                {/* Menu à esquerda */}
                <Col sm={3} className="my-profile-menu-sidebar">
                    <h6 className="my-profile-menu-title">Menu Perfil</h6>
                    <hr/>
                    <Nav variant="pills" className="my-profile-menu-nav">
                        <Nav.Item className="my-profile-menu-item">
                            <Nav.Link eventKey="meus-pedidos" className="my-profile-menu-link">Meus Pedidos</Nav.Link>
                        </Nav.Item>
                        <hr/>
                        <Nav.Item className="my-profile-menu-item">
                            <Nav.Link eventKey="minhas-informacoes" className="my-profile-menu-link">Minhas Informações</Nav.Link>
                        </Nav.Item>
                        <hr/>
                        <Nav.Item className="my-profile-menu-item">
                            <Nav.Link eventKey="metodos-de-pagamento" className="my-profile-menu-link">Métodos de Pagamento</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>

                {/* Conteúdo ao lado */}
                <Col sm={9} className="my-profile-menu-content">
                    <Tab.Content>
                        <Tab.Pane eventKey="meus-pedidos">
                            <MyOrders />
                        </Tab.Pane>
                        <Tab.Pane eventKey="minhas-informacoes">
                            <MyInformation />
                        </Tab.Pane>
                        <Tab.Pane eventKey="metodos-de-pagamento">
                            <PaymentMethods />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default MyProfileMenu;
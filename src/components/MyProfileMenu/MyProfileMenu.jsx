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
            <Row>
                {/* Menu à esquerda */}
                <Col sm={3}>
                    <h6>Menu Perfil</h6>
                    <hr />
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="meus-pedidos">Meus Pedidos</Nav.Link>
                        </Nav.Item>
                        <hr />
                        <Nav.Item>
                            <Nav.Link eventKey="minhas-informacoes">Minhas Informações</Nav.Link>
                        </Nav.Item>
                        <hr />
                        <Nav.Item>
                            <Nav.Link eventKey="metodos-de-pagamento">Métodos de Pagamento</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>

                {/* Conteúdo ao lado */}
                <Col sm={9}>
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
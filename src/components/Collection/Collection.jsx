import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
// import img from '../../assets/'
import '@globalStyles/ColorsVariables.css'
import '../../globalStyles/reset.css'
import './Collection.css'

export function Collection() {
    return (
        <>
            <div className='cards'>
                <div className='card-colection'>
                    <h1>Coleções em destaque</h1>
                    <div className='collection'>
                        <Card className="card-custom card-1">
                            <Card.Body>
                                <Card.Title>30% OFF</Card.Title>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                        <Card className="card-custom card-2">
                            <Card.Body>
                                <Card.Title>30% OFF</Card.Title>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                        <Card className="card-custom card-3">
                            <Card.Body>
                                <Card.Title>30% OFF</Card.Title>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='icons-collection'>
                    <h1>Coleções em destaque</h1>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <div className="circular-image" style={{ backgroundImage: 'url(src/assets/shirt.svg)' }} />
                            </Col>
                            <Col xs={6} md={4}>
                                <div className="circular-image" style={{ backgroundImage: 'url(src/assets/pants.svg)' }} />
                            </Col>
                            <Col xs={6} md={4}>
                                <div className="circular-image" style={{ backgroundImage: 'url(src/assets/cap.svg)' }} />
                            </Col>
                            <Col xs={6} md={4}>
                                <div className="circular-image" style={{ backgroundImage: 'url(src/assets/fone.svg)' }} />
                            </Col>
                            <Col xs={6} md={4}>
                                <div className="circular-image" style={{ backgroundImage: 'url(src/assets/shoes.svg)' }} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
};

export default Collection;
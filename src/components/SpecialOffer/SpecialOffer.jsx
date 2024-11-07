import '@globalStyles/ColorsVariables.css'
import '../../globalStyles/reset.css'
import './SpecialOffer.css'
// import '../../../public/special-offer.png'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function SpecialOffer() {
    return (
        <>
            <Card>
                <div className='imagem'>
                    <Card.Img variant="top" src="../../../public/special-offer.png" />
                </div>
                <div className='corpo'>
                    <Card.Body>
                        <Card.Subtitle>Oferta especial</Card.Subtitle>
                        <Card.Title>Air Jordan edição de colecionador</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                        </Card.Text>
                        <Button variant="primary">Ver Ofertas</Button>
                    </Card.Body>
                </div>
            </Card>
        </>
    )
};

export default SpecialOffer;
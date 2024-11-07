import '@globalStyles/ColorsVariables.css'
import '../../globalStyles/reset.css'
import './SpecialOffer.css'
// import '../../../public/special-offer.png'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function SpecialOffer() {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <div>
                    <Card.Img variant="top" src="../../../public/special-offer.png" />
                </div>
                <div>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </div>
            </Card>
        </>
    )
};

export default SpecialOffer;
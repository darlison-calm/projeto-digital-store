import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// ../../../public/collection-1.png
import '@globalStyles/ColorsVariables.css'
import '../../globalStyles/reset.css'
import './Collection.css'

export function Collection() {
    return (
        <>
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
        </>
    )
};

export default Collection;
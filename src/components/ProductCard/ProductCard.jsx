import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card-style.css'
function ProductCard(props) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image_url} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
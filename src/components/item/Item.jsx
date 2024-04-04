import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./item.css"
import { Link } from 'react-router-dom';
 

export const Item = ({ product }) => {
  return (
    <Card className='cards_products'>
      <div className='contenedor_imagen_productos'>
        <div className='soloImagen'>
          <Card.Img variant="top" src={product.image} className='imagen' />

        </div>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
        </Card.Body>
      </div>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>${product.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link className='irDetalle' as={Link} to={`/item/${product.id}`}>Ver detalle</Card.Link>
      </Card.Body>
    </Card>
  )
}
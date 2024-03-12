import { ItemCount } from "../itemCount/ItemCount";
import "./itemDetail.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export const ItemDetail = ({ product }) => {
  return (
    <div className="padre">
      
    <div className="detalle">
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
          <ListGroup.Item>${product.description}</ListGroup.Item>
          <ListGroup.Item>${product.price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <ItemCount stock={product.stock} />
        </Card.Body>
      </Card>
    </div>
    </div>

  )
}
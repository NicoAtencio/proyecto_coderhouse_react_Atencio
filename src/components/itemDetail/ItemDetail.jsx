import { useContext, useState } from "react";
import { ItemCount } from "../itemCount/ItemCount";
import "./itemDetail.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const ItemDetail = ({ product }) => {

  const { addItem } = useContext(CartContext)
  const [compra, setCompra] = useState(false)

  const onAdd = (cantidad) => {
    addItem(product, cantidad)
    setCompra(true)
  }


  return (
    <div className="contenedor_padre">
      <Card className="card_contenedor">
        <Card.Img variant="top" src={product.image} className="imagen_card" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{product.description}</ListGroup.Item>
          <ListGroup.Item>${product.price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          {compra ?
            <Link to="/cart"><Button variant="primary">Ir al carro</Button></Link>
            :
            <ItemCount stock={product.stock} onAdd={onAdd} />
          }
        </Card.Body>
      </Card>
    </div>
  )
}
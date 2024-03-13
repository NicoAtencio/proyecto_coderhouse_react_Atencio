import { useState } from "react";
import { ItemCount } from "../itemCount/ItemCount";
import "./itemDetail.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export const ItemDetail = ({ product }) => {

  const [cantidadAgregada, setCantidadAgregada] = useState(0);
  const [compra, setCompra] = useState(false)
  const onAdd  = (cantidad) => {
    console.log('compraste un item', cantidad)
    setCantidadAgregada(cantidad)
    setCompra(true)
  }
  console.log(cantidadAgregada)
  return (
    <div className="contenedor_padre">
    <Card className="card_contenedor">
      <Card.Img variant="top" src={product.image} className="imagen_card"/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{product.description}</ListGroup.Item>
        <ListGroup.Item>${product.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        { compra ? <button>Ir al carrito</button> : <ItemCount stock={product.stock} onAdd={onAdd} />}
      </Card.Body>
    </Card>
    </div>
  )
}
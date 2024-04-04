import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./itemCount.css"

export const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0);
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className="contenedor_itemCount">
            <div className="contenedor_contador">
                <div>
                    <Button className="boton" variant="danger" onClick={restar}>-</Button>
                    <Button className="boton" variant="success" onClick={sumar}>+</Button>
                </div>
                <span>Cantidad: {count}</span>
            </div>
            <Button variant="light" disabled={stock === 0 || count === 0} onClick={() => onAdd(count)}> Comprar</Button>
        </div>
    )
}
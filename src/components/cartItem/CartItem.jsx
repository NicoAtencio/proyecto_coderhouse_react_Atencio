import "./cartItem.css";
import { Button } from "react-bootstrap";


export const CartItem = ({ compra, removeItem }) => {
    return (
        <div className="contenedor_cart_item">
            <div className='contenedor_imagen'>
                <img src={compra.image} alt={compra.name} />
            </div>
            <p className="no_mostrar">{compra.name}</p>
            <p>Cantidad: {compra.quantity}</p>
            <p className="no_mostrar">Precio unidad: ${compra.price}</p>
            <p>Precio total: ${compra.price * compra.quantity}</p>
            <Button className="botonQuitar" variant="danger" onClick={() => removeItem(compra.id)}>X</Button>
        </div>
    )
}
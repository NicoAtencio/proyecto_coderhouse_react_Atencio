import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../cartItem/CartItem";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cartView.css"

export const CartView = () => {
    const { cart, removeItem, cartTotal, clear } = useContext(CartContext)
    return (
        <Container style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ textAlign: "center" }}>Tu carrito</h2>
            <div>
                {cart.map((compra) => (
                    <CartItem key={compra.id} compra={compra} removeItem={removeItem} />
                ))
                }
            </div>
            <div className="contenedor_opciones_carro">
                <div className="contenedor_opciones_carro--separador">
                    <p>Total a pagar: ${cartTotal()}</p>
                    <div className="contenedor_botones_carro">
                        <Button className="boton_vaciar_carro" onClick={() => clear()}>Vaciar</Button>
                        <Link className="boton_finalizar_compra" to='/ckeckout'><Button variant="success">Comprar</Button></Link>
                    </div>
                </div>
            </div>
        </Container>

    )
}
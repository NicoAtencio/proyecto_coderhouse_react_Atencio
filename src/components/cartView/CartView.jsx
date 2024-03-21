import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../cartItem/CartItem";
import { Container } from "react-bootstrap";

export const CartView = () => {
    const { cart, removeItem,cartTotal,clear} = useContext(CartContext)
    return (
        <Container style={{display:"flex", flexDirection:"column"}}>
            <h2 style={{textAlign:"center"}}>Tu carrito</h2>
            <div>
                {cart.map((compra) => (
                    <CartItem key={compra.id} compra={compra} removeItem={removeItem}/>
                ))
                }
            </div>
            <p>Total a pagar: ${cartTotal()}</p>
            <button onClick={() => clear()}>Vaciar Carro</button>
        </Container>

    )
}
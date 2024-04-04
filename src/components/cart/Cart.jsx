import { CartView } from "../cartView/CartView"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

export const Cart = () => {
    const {cart} = useContext(CartContext)
    return(
        <div>
            {!cart.length ? <h2 style={{textAlign: "center"}}>Su carro se encuentra vacio.</h2> : <CartView />}
        </div>
    )
}
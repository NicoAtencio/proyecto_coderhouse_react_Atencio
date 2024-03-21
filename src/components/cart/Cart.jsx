import { CartView } from "../cartView/CartView"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

export const Cart = () => {
    const {cart} = useContext(CartContext)
    console.log('Este es el cart desde Cart', cart.length)
    return(
        <div>
            {!cart.length ? <p>Vacio</p> : <CartView />}
        </div>
    )
}
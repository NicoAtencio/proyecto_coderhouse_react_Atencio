import { PiShoppingCartBold } from "react-icons/pi";
import "./cartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
export const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)
    return (
        <div className="contenedor">
            <PiShoppingCartBold size={25}/>
            <div className="contenedor__numero">
                <div className="numero">{cartQuantity()}</div>
            </div>
        </div>
    )
}


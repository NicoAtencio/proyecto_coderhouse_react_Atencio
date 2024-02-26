import { PiShoppingCartBold } from "react-icons/pi";
import "./cartWidget.css";
export const CartWidget = () => {
    const number = 3
    return (
        <div className="contenedor">
            <PiShoppingCartBold size={25}/>
            <div className="contenedor__numero">
                <div className="numero">{number}</div>
            </div>
        </div>
    )
}


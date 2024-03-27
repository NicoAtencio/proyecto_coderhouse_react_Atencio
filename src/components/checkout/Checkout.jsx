import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase";
import { Link } from "react-router-dom";

export const Checkout = () => {
    const [user, setUser] = useState({});
    const [validateEmail, setValidateEmail] = useState("")
    const { cart, cartTotal, clear } = useContext(CartContext)
    const [orderId, setOrderId] = useState("")

    const userData = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value
            }
        )
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!user.name || !user.apellido || user.email === validateEmail) {
            let order = {
                user,
                item: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, order)
                .then(res => {
                    setOrderId(res.id);
                    console.log(order)
                    clear()
                })
                .catch(error => console.log(error))
        } else {
            alert("Los email deben ser iguales")
        }
    }



    return (
        <div>
            {orderId !== "" ?
                <div>
                    <h3>Generaste tu compra</h3>
                    <Link to="/">Volver a Home</Link>
                </div>
                :
                <div>
                    <h4>Completa tus datos</h4>
                    <form onSubmit={finalizarCompra}>
                        <input type="text" name="name" placeholder="Ingrese su nombre" onChange={userData} />
                        <input type="text" name="apellido" placeholder="Ingrese su apellido" onChange={userData} />
                        <input type="email" name="email" placeholder="Ingrese su correo" onChange={userData} />
                        <input type="email" name="segundo-email" placeholder="Repita su correo" onChange={(e) => setValidateEmail(e.target.value)} />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            }
        </div>
    )
} 
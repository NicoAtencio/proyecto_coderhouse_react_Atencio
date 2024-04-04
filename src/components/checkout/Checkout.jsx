import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Loader } from "../loader/Loader";

export const Checkout = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm()

  const { cart, cartTotal, clear } = useContext(CartContext)
  const [orderId, setOrderId] = useState("")
  const [loading, setLoading] = useState(false)



  const finalizarCompra = (data) => {
    setLoading(true)
    let order = {
      user: {
        nombre: data.name,
        apellido: data.apellido
      },
      item: cart,
      total: cartTotal(),
      date: serverTimestamp()
    }
    const ventas = collection(db, "orders")
    addDoc(ventas, order)
      .then(res => {
        setOrderId(res.id);
        clear()
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))

  }

  if(loading){
    return  <Loader />
  }

  return (
    <Container>
      <div>
        {orderId !== "" ?
          <div>
            <h3>Generaste tu compra, su seguimiento es {orderId} </h3>
            <Link to="/">Volver a Home</Link>
          </div>
          :
          <div>
            <h4>Completa tus datos</h4>
            <form onSubmit={handleSubmit(finalizarCompra)}>
              <input className="form-control" type="text" name="name" placeholder="Ingrese su nombre" {...register("name", { required: true, minLength: 2 })} />
              {errors?.name?.type === "required" && <p>El nombre es requerido</p>}
              {errors?.name?.type === "minLength" && <p>El nombre debe tener al menos dos carateres</p>}
              <input className="form-control" type="text" name="apellido" placeholder="Ingrese su apellido" {...register("apellido", {required: true})} />
              {errors?.name?.type === "required" && <p>El Apellido es requerido</p>}
              <input className="form-control" type="email" name="email" placeholder="Ingrese su correo" {...register("email", { required: true })} />
              {errors?.email?.type === "required" && <p>El mail es requerido</p>}
              <input className="form-control" type="email" name="segundo-email" placeholder="Repita su correo" {...register("email2", { required: true, validate: { equalsMails: mails2 => mails2 === getValues().email } })} />
              {errors?.email2?.type === "required" && <p>El mail es requerido</p>}
              {errors?.email2?.type === "equalsMails" && <p>Deben coincidir los mails</p>}
              <button className="btn btn-success" type="submit">Confirmar compra</button>
            </form>
          </div>
        }
      </div>
    </Container >
  )
} 
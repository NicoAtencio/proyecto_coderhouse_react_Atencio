import "./cartItem.css";


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
            <button onClick={() => removeItem(compra.id)}>x</button>
        </div>
    )
}
import { createContext, useState } from "react";

export const CartContext = createContext();


//Proveedor del contexto
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            const newCart = cart.map(compra => {
                if(compra.id === item.id){
                    return {...compra, quantity: compra.quantity + quantity}
                }else{
                    return compra
                }
            })
            setCart(newCart)
        } else{
            setCart([...cart,{...item,quantity}])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (itemId) => {
        const limpiarCarrito = cart.filter(p => p.id !== itemId)
        setCart(limpiarCarrito)
    }

    const isInCart = (itemId) => {
        return cart.some(p => p.id === itemId)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, compra) => acc += compra.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, compra) => acc += (compra.price * compra.quantity), 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, clear, removeItem, isInCart,cartQuantity,cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}
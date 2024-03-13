import React, {useState} from "react"

export const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(0);
    const sumar = () => {
        if (count < stock) {
            setCount(count+1);
        }
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
            <button disabled={stock === 0 || count === 0} onClick={() => onAdd(count)}> Comprar</button>
        </div>
    )
}
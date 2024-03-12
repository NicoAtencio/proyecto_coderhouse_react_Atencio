import React, {useState} from "react"

export const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0);

    const onAdd = () => {
        console.log("Compraste un item");
    }

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
        </div>
    )
}
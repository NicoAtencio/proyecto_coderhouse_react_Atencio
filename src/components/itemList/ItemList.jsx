import { Item } from '../item/Item';
import "./itemList.css"

export const ItemList = ({products}) => {
    return (
        <div className='container'>
            {products.map((p) => (
                <Item key={p.id} product={p} />
            ))}
        </div>
    )
    // Aca se hace un map de products y se ejecuta Item en cada iteracion
}
import { useEffect, useState } from "react";
import { getOneProduct } from "../../mock/fakeApi";
import { ItemDetail } from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        getOneProduct(id)
            .then(res => setProduct(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) {
        return <h1 style={{ textAlign: 'center' }}>Cargando....</h1>
    
    }
        return (
            <div>
                <ItemDetail product={product} />
            </div>
        )
}
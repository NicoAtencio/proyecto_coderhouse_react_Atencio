import { useEffect, useState } from "react";
import { ItemDetail } from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [validateItem, setValidateItem] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const collectionProd = collection(db,"productos");
        const referenciaDoc = doc(collectionProd, id);
        getDoc(referenciaDoc)
        .then(res => {
            if (res.data()) {
                setProduct({id:res.id, ...res.data()})
            }
            else {
                setValidateItem(true)
            }
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    },[id])

    if (validateItem) {
        return <h3 style={{textAlign: "center"}}>No existe el producto buscado</h3>
    }
    return (
        <div>

            {loading ? <Loader /> : <ItemDetail product={product} />}

        </div>
    )
}
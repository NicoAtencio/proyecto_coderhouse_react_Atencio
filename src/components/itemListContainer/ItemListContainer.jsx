import { Container } from "react-bootstrap";
import { useState,useEffect } from "react";
import { getProducts } from "../../mock/fakeApi";
import { ItemList } from "../itemList/ItemList";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = ({greeting}) => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false)

    const {categoryId} = useParams();
    useEffect(() => {
        setLoading(true);
        const productsCollection = categoryId ? query(collection(db,"productos"), where("category","==",categoryId)) : collection(db,"productos");
        getDocs(productsCollection)
        .then(res => {
            const list = res.docs.map(product => {
                return {
                    id: product.id,
                    ...product.data()
                }
            });
            setProducts(list);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    },[categoryId])

    if(loading) {
        return(
                <Loader />
        )
    }
    return (
        <Container >
            {categoryId ? <h2 className="mensaje"> {greeting} <span>{categoryId}</span></h2> : <h2 className="mensaje">{greeting}</h2>}
            <ItemList products={products}/>
        </Container>
    )
}
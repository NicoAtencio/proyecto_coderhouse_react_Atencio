import { Container } from "react-bootstrap";
import { useState,useEffect } from "react";
import { getProducts } from "../../mock/fakeApi";
import { ItemList } from "../itemList/ItemList";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { Loader } from "../loader/Loader";

export const ItemListContainer = ({greeting}) => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false)

    const {categoryId} = useParams();
    useEffect(() => {
        setLoading(true)
        getProducts()
        .then(res => {
            if(categoryId){
                const categories = res.filter(p => p.category === categoryId);
                setProducts(categories)
            } else {
                setProducts(res)
            }
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
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
import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const { categoryName } = useParams()
    const [categoryNameState, setCategoryNameState] = useState('')

    useEffect(() =>{
        
        const funcionElegida = categoryName ? getProductsByCategory : getProducts
        
        funcionElegida(categoryName)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryName])

    useEffect(() => {
        setCategoryNameState(categoryName)
    }, [categoryName])

    return (
        <div className="container">
            
            <h1>{categoryName ? `Categoria ${categoryNameState}` : "Bienvenido a mi tienda! 🎉"} </h1>
            <ItemList products={products}/>
        </div>
    ) 
}

export default ItemListContainer
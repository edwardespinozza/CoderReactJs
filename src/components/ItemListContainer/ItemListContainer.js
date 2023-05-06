import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
/* import { getProducts, getProductsByCategory } from "../../asyncMock" */
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseconfig'
import { getProducts } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'

const ItemListContainer = ({greeting}) => {

    const { categoryName } = useParams()
    const [categoryNameState, setCategoryNameState] = useState('')

    const getProductsWithCategory = () => getProducts(categoryName)
    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryName])

    useEffect(() => {
        setCategoryNameState(categoryName)
    }, [categoryName])

    if(loading) {
        return <h3>Cargando...</h3>
    }

    if(error) {
        return <h3>Hubo un error</h3>
    }

    return (
        <div className="container">
            
            <h1>{categoryName ? `Categoria ${categoryNameState}` : "Bienvenido a mi tienda! 🎉"} </h1>
            <ItemList products={products}/>
        </div>
    ) 
}

export default ItemListContainer
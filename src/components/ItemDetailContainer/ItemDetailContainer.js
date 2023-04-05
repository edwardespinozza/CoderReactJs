import './ItemDetailContainer.css'
import { getProductById } from "../../asyncMock"
import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    const { itemId } = useParams()

    useEffect(() =>{
        getProductById(itemId).then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        })
    }, [itemId])

    return (
        <div className="container section">
            <ItemDetail {...product}/>
        </div>
    ) 
}

export default ItemDetailContainer
import './ItemDetailContainer.css'
/* import { getProductById } from "../../asyncMock" */
import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseconfig'
import { createAdaptedProductFromFirestore } from '../../adapters/createAdaptedProductFromFirestore'

const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const [ product, setProduct ] = useState()
    const [ loading, setLoading ] = useState(true)

    useEffect(() =>{
        setLoading(true)

        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(snapshot => {
                console.log(snapshot)
                const productAdapted = createAdaptedProductFromFirestore(snapshot)
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if(loading) {
        return <h3>Cargando...</h3>
    }

    return (
        <div className="container section">
            <ItemDetail {...product}/>
        </div>
    ) 
}

export default ItemDetailContainer
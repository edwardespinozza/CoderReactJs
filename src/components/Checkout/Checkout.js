import { Context } from "react"
import Cart from "../Cart/Cart"
import { useCart } from "../../context/CartContext"
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../services/firebase/firebaseconfig"
import { useNotification } from "../../notification/Notifications"
import { useNavigate } from "react-router-dom"
import ContactForm from "../ContactForm/ContactForm"

const Checkout = () => {

    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()
    const { setNotification } = useNotification()
    const navigate = useNavigate()

    const createOrder = async (userData) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: userData,
                items: cart,
                total
            }
    
            const ids = cart.map(prod => prod.id)
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
            const { docs } = await getDocs(productsRef) 
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id == doc.id)
                const prodQuantity = productAddedToCart?.quantity
                
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
                const ordersRef = collection(db, 'orders')
                const orderAddded = await addDoc(ordersRef, objOrder)
                setNotification('success', 'La orden se genero correctamente.')
                clearCart()
                setOrderId(orderAddded.id)
                setTimeout(() => {
                    navigate('/')
                }, 5000)
            } else {
                setNotification('error', 'Hay productos que no tienen stock.')
            }

        } catch (error) {
            setNotification('error', 'Ocurrio un error generando la orden.')

        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h3>Generando la orden...</h3>
    }

    if(orderId) {
        return (
            <div>
                <h1>El id de su compra es: {orderId}</h1>
            </div>
        )
    }
    
    return (
        <div>
            <h1>Checkout</h1>
            <h2>Ingrese sus datos</h2>
            <ContactForm onConfirm={createOrder} />
            {/* <button onClick={createOrder}>Crear orden</button> */}
        </div>
    )
}

export default Checkout
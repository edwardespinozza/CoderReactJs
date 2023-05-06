import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useNotification } from '../../notification/Notifications'

const ItemDetail = ({ id, name, img, price, stock, description }) => {

    const { addItem, isInCart } = useCart()
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity, stock, img
        }
        addItem(productToAdd)
        setNotification('success',`Se ha añadido al carrito: ${name} x ${quantity} unidades`)

    }

    return (
        <div className='detailCard'>
            <img className='detailCardImg' src={img}/>
            <div className='detailCardInfo'>
                <h4 className='detailCardTitle'>{name}</h4>
                <span className='detailCardDescripcion'>{description}</span>
                <p className='detailCardPrice'>${price}</p>
                {
                    isInCart(id) ? (
                        <Link to='/cart'>Terminar compra</Link>
                    ) : (
                        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail
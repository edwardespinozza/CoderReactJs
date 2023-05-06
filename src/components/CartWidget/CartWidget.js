import cart from './Assets/cart.svg'
import './CartWidget.css'
import { useCart } from '../../context/CartContext'
import { useState } from 'react'

const CartWidget = () => {

    const { totalQuantity } = useCart()

    return (
        <div className='cartWidget'>
            <img className='cartIcon' src={cart} alt="cart-widget"/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget
import cart from './Assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cartWidget'>
            <img className='cartIcon' src={cart} alt="cart-widget"/>
            100
        </div>
    )
}

export default CartWidget
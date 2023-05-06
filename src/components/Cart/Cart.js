import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css';


const Cart = () => {
    const { cart, total } = useCart()

    return (
        <div className="cart-view">
            <h1>Cart Viewww</h1>
            <div className="cart-items">
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id} className="cart-item">
                                <img src={prod.img} className="item-image" alt={prod.name}></img>
                                <div className="item-details">
                                    <h2 className="tituloProductoCarrito">{prod.name}</h2>
                                    <h3>Cantidad: {prod.quantity}</h3>
                                    <h3>${prod.price}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <h1 className="total">Total: ${total}</h1>

            <Link to='/checkout'>
                <button className="buttonVerMas">
                    Checkout
                </button>
            </Link>
        </div>
    )
}

export default Cart



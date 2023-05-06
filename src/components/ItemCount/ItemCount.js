import { useState } from "react"
import './ItemCount.css'

const ItemCount = ( { stock, initial, onAdd } ) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) setCount(prev => prev + 1)
    }
    const decrement = () => {
        if (count > 1) setCount(prev => prev - 1)
    }

    return (
        <div>
            <div className="bloqueSelectorCantidad">
                <button className="botonesSumarYRestar sumar" onClick={decrement}>-</button>
                <h1 className="cantidadItems">{count}</h1>
                <button className="botonesSumarYRestar restar" onClick={increment}>+</button>
            </div>
            <button className="buttonVerMas" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
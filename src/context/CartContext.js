import { createContext, useContext, useState } from "react";


export const CartContext = createContext('valor inicial')

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
        } else {
        console.log('No se agrego porque ya esta')
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const updateCart = cart.filter(prod => prod.id !== id)
        setCart(updateCart)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })

        return total
    }

    const total = getTotal()

    const clearCart = () => {
        setCart([])
    } 

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, removeItem, isInCart, total, clearCart }}>
            { children }
        </CartContext.Provider>
    )

}

export const useCart = () => {
    return useContext(CartContext)
}
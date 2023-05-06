import './App.css';
import { createContext, useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/Notifications';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

const App = () => {

  return (
    <div className="App">
        <BrowserRouter>
          <NotificationProvider>
            <CartProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<ItemListContainer greeting={"Bienvenido a mi tienda! 🎉"} />} />
                <Route path="/category/:categoryName" element={<ItemListContainer greeting={"Categoria "  } />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout/>} />
              </Routes>
            </CartProvider>
          </NotificationProvider>
        </BrowserRouter>
    </div>
  );
} 

export default App;

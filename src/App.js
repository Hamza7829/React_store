import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Products from './components/Products';
import Cart from './components/Cart';
import Search from './components/Search';
import ProductDetail from './components/ProductDetail';
import { products } from './components/Data';
import './index.css';
export default function App() {
    const [data, setData] = useState([...products])
    const [cart, setCart] = useState([]);
    return (
        <>
            <Router>
                <Nav setData={setData} cart={cart} />
                <Routes>
                    <Route path='/' element={<Products items={data} cart={cart} setCart={setCart} />} />
                    <Route path='cart' element={<Cart cart={cart} setCart={setCart} />} />
                    <Route path='/product/:id' element={<ProductDetail cart={cart} setCart={setCart}/>} />
                    <Route path='/search/:term' element={<Search />} />
                </Routes>

            </Router>
        </>
    );
}

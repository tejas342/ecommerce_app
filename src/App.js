// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CheckoutPage from './components/CheckoutPage';
import Cart from './components/Cart';
import './App.css'; 

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="fas fa-shopping-cart"></i> Shopping Cart
              </Link>
            </li>
            <li>
              <Link to="/checkout">
                <i className="fas fa-credit-card"></i> Checkout
              </Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route 
            path='/'
            element={<ProductList cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/checkout"
            element={<CheckoutPage cartItems={cartItems} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//Cart.js
//import React ,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeItem, calculateTotalPrice } from './CartUtilities';
import './Cart.css'

const Cart = ({ cartItems, setCartItems }) => {

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is empty.</p>
          <Link to="/">Continue Shopping</Link>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => decrementQuantity(cartItems, setCartItems, item)}
                    className="quantity-button"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <p>{item.quantityAdded}</p>
                  <button
                    onClick={() => incrementQuantity(cartItems, setCartItems, item)}
                    className="quantity-button"
                  >
                    +
                  </button>
                  <button className="remove-button" onClick={() => removeItem(cartItems, setCartItems, item)}>Remove</button>
                </div>
              </div>
              <div className="cart-item-price">
                <p>${item.price * item.quantityAdded}</p>
              </div>
            </div>
          ))}
          <div className="total-price">
            <p>Total Price: ${calculateTotalPrice(cartItems)}</p>
          </div>
          <div className='cartButton'>
            <Link to="/checkout">
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

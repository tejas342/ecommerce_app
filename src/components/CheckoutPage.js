// CheckoutPage.js
import React, { useState } from 'react';
import { calculateTotalPrice } from './CartUtilities';
import PaymentModal from './PaymentModal';
import './CheckoutPage.css'; 

const CheckoutPage = ({ cartItems }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Add items to the cart before checking out.</p>
      ) : (
        <div>
          <h3>Cart Summary:</h3>
          <ul className="checkout-cart-summary">
            {cartItems.map((item) => (
              <li key={item.id} className="checkout-cart-item">
                <div className="checkout-cart-item-details">
                  <img src={item.image} alt={item.title} className="checkout-cart-item-image" />
                  <div className="checkout-item-description">
                    <p>{item.title}</p>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantityAdded}</p>
                    <p>Item Total: ${item.price * item.quantityAdded}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p>Total Price: ${calculateTotalPrice(cartItems)}</p>
          <button onClick={openModal}>Proceed to Payment</button>
          {isModalOpen && <PaymentModal closeModal={closeModal} />}
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

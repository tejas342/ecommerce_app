import React, { useState } from 'react';
import './CheckoutPage.css';

const PaymentModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    paymentMethod: 'COD',
    address: '',
    pincode: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setOrderPlaced(true);
  };

  const handleContinueShopping = () => {
    window.location.href = '/'; // Redirect to the home page
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Payment Details</h3>
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
        </div>
        {orderPlaced ? (
          <div className="thank-you-message">
            <h3>Your order has been placed!</h3>
            <button onClick={handleContinueShopping}>Continue Shopping</button>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="modal-input"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              className="modal-input"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              className="modal-input"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <select
              className="modal-input"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              required
            >
              <option value="COD">Cash on Delivery</option>
            </select>
            <input
              type="text"
              className="modal-input"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              className="modal-input"
              placeholder="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="modal-submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;

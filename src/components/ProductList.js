import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { addToCart } from './CartUtilities';
import './ProductList.css'; 
import { Link } from 'react-router-dom';

const ProductList = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data.map(product => ({ ...product, quantityAdded: 0 })));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product, quantityChange) => {
    addToCart(cartItems, setCartItems, product, quantityChange);
  };

  return (
    <div className="container">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.title} />
          <div className="product-content">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
          {product.quantityAdded > 0 ? (
            <div className="quantity-controls">
              <button onClick={() => addToCart(cartItems, setCartItems, product, -1)}>-</button>
              <span>{product.quantityAdded}</span>
              <button onClick={() => addToCart(cartItems, setCartItems, product, 1)}>+</button>
            </div>
          ) : (<Link to='/cart'>
              <button onClick={() => handleAddToCart(product, 1)}>Add to Cart</button>

          </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;

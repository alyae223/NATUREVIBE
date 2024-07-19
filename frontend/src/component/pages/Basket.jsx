// Basket.jsx

import React, { useState } from 'react';

export default function Basket() {
  // State to hold items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* Display cart items */}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      {/* You can customize the styling of your cart here */}
      <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
        <h3>Cart Summary</h3>
        <p>Total Items: {cartItems.length}</p>
        <p>Total Price: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
        {/* You can add checkout functionality or continue shopping buttons here */}
      </div>
    </div>
  );
}

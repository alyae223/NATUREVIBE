import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteFromCart, addToCart, setCart } from './actions';
import { FaTrashAlt, FaShoppingCart, FaPlus, FaMinus, FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Checkout from './Check';
import './cart.css';
 
const Cart = ({ cart, deleteFromCart, addToCart, setCart }) => {
  const [quantities, setQuantities] = useState({});
  const [promoCode, setPromoCode] = useState('');
  const [discountedTotal, setDiscountedTotal] = useState(0);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertColor, setAlertColor] = useState('');
  const [invalidAttempts, setInvalidAttempts] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedQuantities = JSON.parse(localStorage.getItem('quantities')) || {};

    if (storedCart.length > 0) {
      setCart(storedCart);
    }
    setQuantities(storedQuantities);
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('quantities', JSON.stringify(quantities));
  }, [cart, quantities]);

  useEffect(() => {
    const total = cart.reduce((sum, item) => {
      return sum + (item.price * (quantities[item.id] || item.quantity));
    }, 0);
    setDiscountedTotal(total);
  }, [cart, quantities]);

  const handleIncrement = (itemId) => {
    const item = cart.find(item => item.id === itemId);
    const quantityToAdd = (quantities[itemId] || 0) + 1; // Increment quantity

    if (item) {
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [itemId]: quantityToAdd,
      }));
    } else {
      // If item is not already in the cart, add it with the selected quantity
      const newItem = { id: itemId, quantity: quantityToAdd };
      addToCart(newItem);
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [itemId]: quantityToAdd,
      }));
    }
  };

  const handleDecrement = (itemId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: Math.max((prevQuantities[itemId] || 1) - 1, 1),
    }));
  };

  const handleDelete = (itemId) => {
    deleteFromCart(itemId);
    setQuantities(prevQuantities => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[itemId];
      return newQuantities;
    });
  };

  const applyPromoCode = () => {
    const total = cart.reduce((sum, item) => {
      return sum + (item.price * (quantities[item.id] || item.quantity));
    }, 0);

    if (promoCode === 'XT9 ç1I') {
      setDiscountedTotal(total - 100);
      setAlertMessage('Promo code applied! You saved 100 dhs.');
      setAlertColor('green');
      setInvalidAttempts(0);
    } else {
      setDiscountedTotal(total);
      if (invalidAttempts >= 1) {
        setAlertMessage('This code is not working. Please try a different one.');
      } else {
        setAlertMessage('Invalid promo code.');
      }
      setAlertColor('red');
      setInvalidAttempts(prev => prev + 1);
    }

    setTimeout(() => {
      setAlertMessage('');
    }, 1000);
  };

  const count = cart.length;

  const handleCheckout = () => {
    // Add your checkout logic here
    // For example, redirecting to a checkout page
    // or displaying a modal for payment processing
    console.log("Checkout clicked");
  };

  return (
    <div className="cart-container">
      {count > 0 ? ( 
        <div className="cart-grid">
          <h2>Cart ({count})</h2>
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt="" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="price">{item.price * (quantities[item.id] || item.quantity)} dhs</div>
              </div>
              <div className="quantity-controls">
                <button onClick={() => handleIncrement(item.id)} className="cart-button">
                  <FaPlus />
                </button>
                <h5>{quantities[item.id]}</h5>
                <button onClick={() => handleDecrement(item.id)} className="cart-button">
                  <FaMinus />
                </button>
              </div>
              <button onClick={() => handleDelete(item.id)} className="delete-button">
                <FaTrashAlt />
              </button>
            </div>
          ))}
          <div className="basket-summary">
            <h4>BASKET SUMMARY</h4>
            <p>Total: <span id='total'>{discountedTotal} dh</span></p>
            <input 
              type="text" 
              onChange={(e) => setPromoCode(e.target.value)} 
              placeholder='Promo Code XXX XXX' 
              value={promoCode}
            />
            <button onClick={applyPromoCode}>Check</button>
            {alertMessage && <p style={{ color: alertColor, marginTop: "10px" }}>{alertMessage}</p>}
            <div className="checkout-section">
              <h5>GET FREE SHIPPING <FaExclamationCircle /></h5>
              <h4>PRODUCTS</h4>
              <p style={{ width: '190px' }}>5000 Dh missing to benefit from free delivery</p>
              <Link to="/Checkout">
                <button onClick={handleCheckout} className="checkout-button">Checkout</button>
              </Link>
            </div>
          </div>
          <div className="retours">
            <h5>Returns are easy</h5>
            <p>Free return within 7 days See more</p>
          </div>
        </div>
      ) : (
        <div className='empty-cart'>
          <FaShoppingCart size={80} color="gray" />
          <p>Your cart is empty</p>
          <p>Browse our categories and discover our best offers!</p><br />
          <Link to={'/'} id='tr'>
            Go Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  deleteFromCart,
  addToCart,
  setCart,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart, // Assuming your cart state is stored under cartReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
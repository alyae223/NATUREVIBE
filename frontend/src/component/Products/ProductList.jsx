import React, { useState, useEffect } from 'react';
import { addToCart, likeProduct } from '../pages/actions';
import './Products.css'; 
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaCartPlus, FaHeart, FaStar } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';

const ProductList = ({ addToCart, likeProduct }) => {
  const [dataP, setData] = useState([]);
  const { category } = useParams(); 

  useEffect(() => {
      const fetchData = async () => {
          try {
              const endpoint = category 
                  ? `http://127.0.0.1:8000/api/products/category/${category}`
                  : 'http://127.0.0.1:8000/api/products';
              const response = await axios.get(endpoint);
              setData(response.data);
          } catch (error) {
              console.log('error fetching data', error);
          }
      };

      fetchData();
  }, [category]); 

  const handleAddToCart = (product) => {
      addToCart(product); 
      window.alert(`${product.title} added to cart!`);
  };

  const handleLike = (product) => {
      likeProduct(product);
      window.alert(`${product.title} liked!`);
  };
  const handleCheckout = () => {
    // Show message
    window.alert("Checkout successful!");

    // Print information
    const info = dataP.map(product => `${product.name}: $${product.price.toFixed(2)}`).join('\n');
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<pre>${info}</pre>`);
    printWindow.print();
};

  return (
    <div className="container">
      <h1>NEW COLLECTION</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {dataP.length > 0 ? (
          dataP.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < product.rating ? "filled-star" : ""} />
                    ))}
                  </div>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                  <div className="mt-auto d-flex justify-content-center align-items-center button-group">
                    <button className="btn btn-primary" type="button" onClick={() => handleAddToCart(product)}>
                      <FaCartPlus /> Add to Cart
                    </button>
                    <button className="btn btn-outline-danger" type="button" onClick={() => handleLike(product)}>
                      <FaHeart /> Like
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No Products</p>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
  likeProduct,
};

export default connect(null, mapDispatchToProps)(ProductList);
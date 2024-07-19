import React, { useState, useEffect } from 'react';
import { addToCart, likeProduct } from '../pages/actions'; 
import { connect } from 'react-redux';
import axios from 'axios';
import { FaShoppingCart, FaHeart } from 'react-icons/fa'; // Importing icons
import VideoPlayer2 from '../Links/VideoPlayer2';
const Shop = ({ addToCart, likeProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.log('error fetching data', error);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); 
    window.alert(`${product.name} added to cart!`);
  };

  const handleLike = (product) => {
    likeProduct(product); 
    window.alert(`${product.name} liked!`);
  };

  return (
    <div className="container">
      
     <VideoPlayer2/>
     <h1 style={{display:'flex',justifyContent:'center'}}>OUR PRODUCTS</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4" style={{ maxWidth: '1200px', margin: 'auto' }}>
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.name}  style={{width:'400',height:'200px'}}/>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                  <div className="mt-auto d-flex justify-content-between">
                    <button className="btn btn-primary" type="button" onClick={() => handleAddToCart(product)}>
                      <FaShoppingCart /> Add to Cart
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

export default connect(null, mapDispatchToProps)(Shop);

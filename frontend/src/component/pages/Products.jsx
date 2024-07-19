// Products.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToCart, likeProduct } from './actions'; 
import { connect } from 'react-redux';
import './Prouducts.css';
import next from './next-removebg-preview.png';
import axios from 'axios';

const Products = ({ addToCart, likeProduct }) => {
    const [dataP, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/ShowIndex');
                setData(response.data);
            } catch (error) {
                console.log('error fetching data', error);
            }
        };
        fetchData();
    }, []);

    const handleAddToCart = (item) => {
        addToCart(item); 
        window.alert(`${item.title} added to cart!`);
    };

    const handleLike = (item) => {
        likeProduct(item);
        window.alert(`${item.title} liked!`);
        
    };

    return (
        <div id='products' style={{ marginTop: "124px" }}>
            {dataP.length > 0 ? (
                dataP.map((item, index) => (
                    <div key={index} className='textImageT'>
                        <button onClick={() => handleLike(item)}>
                            <img src="heart (2).png" alt="Heart" width={23} id='df'/>
                        </button>
                        <Link to={`pageSo/${item.title}`} style={{ color: 'white', textDecoration: 'none' }}>
                            <img src={`http://127.0.0.1:8000/imagess/${item.image}`} width={150} height={200} alt="" />
                            <h3 style={{ marginLeft: "10px", marginTop: "12px", marginBottom: "10px" }}>{item.title}</h3>
                            <p>{item.discription}</p>
                            <span>{item.prix}Dh</span>
                        </Link>
                        <button onClick={() => handleAddToCart(item)}>
                            Add to cart <img src={next} width={20} alt="" />
                        </button>
                    </div>
                ))
            ):(
                <p style={{ width:"300px",  marginLeft:"600px" , marginTop:'300px' , fontSize:'30px' }}> No Products</p>
            )}
        </div>
    );
};

const mapDispatchToProps = {
    addToCart,
    likeProduct,
};

export default connect(null, mapDispatchToProps)(Products);

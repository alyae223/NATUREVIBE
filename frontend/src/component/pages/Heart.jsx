
 import React from 'react';
  import { connect } from 'react-redux';
  import { FaTrashAlt } from 'react-icons/fa';
  import { FaHeart } from 'react-icons/fa';

  const  Heart= ({ likedProducts }) => {
 
    return (
      <div className="container">
        <h1>Liked Products</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {likedProducts.length > 0 ? (
            likedProducts.map((product) => (
              <div className="col" key={product.id}>
                <div className="card h-100">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price.toFixed(2)}</p>
                    <button className="btn btn-outline-danger" type="button">
                      <FaHeart /> Remove Like
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No Liked Products</p>
          )}
        </div>
      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      likedProducts: state.cartReducer.likedProducts, // Assuming your liked products are stored under cartReducer
    };
  };
  
  export default connect(mapStateToProps)(Heart);
  


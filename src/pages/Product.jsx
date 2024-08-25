import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './Product.css';

const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imgUrl, name, surname } = location.state || {};

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = { imgUrl, name, surname };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    toast.success('Product added to cart!', {
      duration: 3000,
      position: 'top-center',
    });
  };

  const handleDelete = () => {
    // Delete user data from local storage (if needed)
    localStorage.removeItem('userData');
    
    toast.success('User data deleted successfully!', {
      duration: 3000,
      position: 'top-center',
    });
    
    navigate('/'); // Redirect to home or other page after deletion
  };

  return (
    <div className="product-container">
      <Toaster />
      {imgUrl && name && surname ? (
        <div className="product-card">
          <img src={imgUrl} alt={name} className="product-image" />
          <div className="product-details">
            <h1 className="product-title">{name} {surname}</h1>
            <p className="product-description">This is the detailed view of the user you created. If you want to go back, use the navigation menu.</p>
            <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
            <button onClick={handleDelete} className="delete-buttonn">Delete</button>
          </div>
        </div>
      ) : (
        <p>No product data available.</p>
      )}
    </div>
  );
};

export default Product;

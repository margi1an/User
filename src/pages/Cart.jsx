import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const handleDelete = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    
    toast.success('Item removed from cart!', {
      duration: 3000,
      position: 'top-center',
    });
  };

  return (
    <div className="cart-container">
      <Toaster />
      {cartItems.length > 0 ? (
        <div className="cart-list">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imgUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2 className="cart-item-title">{item.name} {item.surname}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ipsum debitis impedit fuga? Numquam quibusdam quam illo reiciendis accusantium atque.</p>
                <button onClick={() => handleDelete(index)} className="delete-button">Remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No items in cart.</p>
      )}
    </div>
  );
};

export default Cart;

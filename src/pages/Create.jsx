import React, { useState } from 'react';
import './Create.css';
import toast, { Toaster } from 'react-hot-toast';

function Create() {
  const [imgUrl, setImgUrl] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Saqlash
    const userData = { imgUrl, name, surname };
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Toast xabari
    toast.success('User data has been saved successfully!', {
      duration: 3000,
      position: 'top-center',
    });

    // Tozalash
    setImgUrl('');
    setName('');
    setSurname('');
  };

  return (
    <div className="create-container">
      <div className="create-card">
        <h1 className="create-title">Create User</h1>
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="imgUrl">Image URL:</label>
            <input
              type="text"
              id="imgUrl"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              placeholder="Enter image URL"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Enter your surname"
              required
            />
          </div>
          <button type="submit" className="submit-button">Save</button>
        </form>
      </div>
      <Toaster /> {/* Toast xabarlarini ko‘rsatish uchun Toaster */}
    </div>
  );
}

export default Create;

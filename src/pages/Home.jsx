import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // CSS fayli

const Home = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('userData');
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  const handleCardClick = () => {
    if (userData) {
      navigate('/product', { state: userData });
    }
  };

  return (
    <div className="home-container">
      {userData ? (
        <div className="card" onClick={handleCardClick}>
          <img src={userData.imgUrl} alt={userData.name} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{userData.name} {userData.surname}</h2>
            <p className="card-description">Click on this card to view more details.</p>
          </div>
        </div>
      ) : (
        <p>No user data available. Please create user data first.</p>
      )}
    </div>
  );
};

export default Home;

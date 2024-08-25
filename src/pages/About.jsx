import React from 'react';
import './About.css'; // CSS fayli

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to our website! We are dedicated to providing the best service and experience for our users.
          Our team is committed to excellence and innovation. We strive to bring you the latest updates and features
          to enhance your experience. Thank you for being a part of our community!
        </p>
        <div className="about-team">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="team-photo" />
            <h2 className="team-name">Jane Doe</h2>
            <p className="team-role">Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="team-photo" />
            <h2 className="team-name">John Smith</h2>
            <p className="team-role">Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

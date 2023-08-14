import React from 'react';
import {
  FaUserFriends,
  FaMedkit,
  FaDumbbell,
  FaUsers,
  FaHandsHelping,
  FaUtensils,
  FaBirthdayCake,
  FaExclamationTriangle,
  FaTags,
} from 'react-icons/fa';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
    <br></br>
    
      <h1>Welcome to OldCare Connect</h1>
    
      <p>Your Elderly Assistance Platform</p>

      <div className="features">
        <div className="feature">
          <FaUserFriends className="feature-icon" />
          <br></br>
         Social Interaction
          <p>Connect with like-minded people nearby.</p>
        </div>

        <div className="feature">
          <FaMedkit className="feature-icon" />
          <br></br>
         Medical Support
          <p>Receive medication reminders and health tips.</p>
        </div>

        <div className="feature">
          <FaDumbbell className="feature-icon" />
          <br></br>
          Health & Fitness
          <p>Explore health blogs, diet tips, and yoga resources.</p>
        </div>

       

        <div className="feature">
          <FaUsers className="feature-icon" />
          <br></br>
          Volunteer Assistance
          <p>Volunteers can help and connect with the elderly.</p>
        </div>

        <div className="feature">
          <FaUtensils className="feature-icon" />
          <br></br>
          Home Care Services
          <p>NGOs provide cooking, washing, and home assistance.</p>
        </div>

        <div className="feature">
          <FaBirthdayCake className="feature-icon" />
          <br></br>
          Organizing Parties
          <p>Celebrate with events and parties for the elderly.</p>
        </div>

        <div className="feature">
          <FaExclamationTriangle className="feature-icon" />
          <br></br>
          Fall Detection
          <p>Monitor falls with advanced detection systems.</p>
        </div>

        <div className="feature">
          <FaTags className="feature-icon" />
          <br></br>
          Special Discounts
          <p>Enjoy exclusive offers from local businesses.</p>
        </div>
      </div>


      <footer className="footer">
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>Email: info@oldcareconnect.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Elderly Street, Senior City</p>
        
        </div>
       
      </footer>
    </div>
  );
};

export default LandingPage;

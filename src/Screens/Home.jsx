import React from 'react';
import './Home.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../Components/Navbar/Navbar';


const Home = () => {
 
  return (
    <div>
      
      <div className="home-container">
      <div className="side-nav-container">
       <Navbar/>
      </div>
      <div className="content-container">
      <div className="heading-tab">
        <h1>Old Care</h1>
      </div>
        <Routes>
          
         
       
        </Routes>
      </div>
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import './Home.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../Components/Navbar/Navbar';
import Fall from './Fall/Fall';


const Home = () => {
 
  return (
    <div>
      
      <div className="home-container">
      
      <Navbar/>
      
      <div className="content-container">
      

      <div className="heading-tab">
      
      
        <h1>Old Care</h1>
      </div>
        <Routes>
          
        <Route path="/fall" element={<Fall/>} />
       
        </Routes>
      </div>
      </div>
    </div>
  );
};

export default Home;
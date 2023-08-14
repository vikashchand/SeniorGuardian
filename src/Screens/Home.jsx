import React from 'react';
import './Home.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../Components/Navbar/Navbar';
import Fall from './Fall/Fall';
import Medical from './Medical/Medical';
import LandingPage from './Landing Page/LandingPage';
import Homecare from './HomeServices/Homecare';
import Activities from './TrackActivities/Activities';


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
        <Route path="/" element={<LandingPage/>} />
        <Route path="/fall" element={<Fall/>} />
        <Route path="/medical" element={<Medical/>} />
        <Route path="/services" element={<Homecare/>} />
        <Route path="/activities" element={<Activities/>} />
        
        </Routes>
      </div>
      </div>
    </div>
  );
};

export default Home;
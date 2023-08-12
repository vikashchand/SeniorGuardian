

import React,{useState} from 'react';

import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file
import { FaBars } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

import {HiUserGroup} from 'react-icons/hi';
import{MdAdminPanelSettings} from 'react-icons/md';

import { AiFillHome } from 'react-icons/ai';

import {GiFalling} from 'react-icons/gi';

const Navbar = () => {


 // const navigate = useNavigate();
 const [isNavOpen, setIsNavOpen] = useState(false);
  



  const handleLogout = () => {
 
    window.location.href = 'http://127.0.0.1:5500/public/Fall/hi.html';
  };
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`sidenav-container ${isNavOpen ? 'expanded' : 'minimized'}`}>
    <div className="menu">
      <FaBars className="hamburger-icon" onClick={toggleNav} />
    </div>
    <div className="menu">
    <FaBars className="hamburger-icons" />
  </div>
    <NavLink to={'/home'}  className="active-link">
    {isNavOpen ? 'Home' : <AiFillHome />}
      
    </NavLink>
    <NavLink to={'/home/Customers'} >
       
    {isNavOpen ? 'Customer Details' : <HiUserGroup/>}


  </NavLink>
          
         
            
            <NavLink to={'/home/fall'} >
            {isNavOpen ? 'Manage templates' : <FaEnvelope />}
            </NavLink>
            <NavLink to="/home/employees" >
            {isNavOpen ? 'Manage Employees' : <MdAdminPanelSettings/>}
            
            
            
            
            </NavLink>
            
          <NavLink onClick={handleLogout}>
            {isNavOpen ? 'Fall detection' : <GiFalling/>}
            
            
            
            
            </NavLink>

            
        
          
        
        

       
          
        

        </div>
  );
};

export default Navbar;




import React,{useState} from 'react';

import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file
import { FaBars } from 'react-icons/fa';
import { FaBriefcaseMedical } from 'react-icons/fa';

import {CgGym} from 'react-icons/cg';
import{AiOutlineShoppingCart} from 'react-icons/ai';

import { AiFillHome } from 'react-icons/ai';

import {GiFalling} from 'react-icons/gi';

const Navbar = () => {


 // const navigate = useNavigate();
 const [isNavOpen, setIsNavOpen] = useState(false);
  



  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
    <div className="menu">
 
    <FaBars className="hamburger-icon"    onClick={toggleNav} />
   <h1>OldCare Connect</h1>  
  </div>
    <div className={`sidenav-container  ${isNavOpen ? 'expanded' : 'minimized'}`}>
   
  
    <NavLink to={'/home'}  className="active-link">
    {isNavOpen ? 'Home' : <AiFillHome />}
      
    </NavLink>
    <NavLink to={'/home/Customers'} >
       
    {isNavOpen ? 'Track Activities' : <CgGym/>}


  </NavLink>
          
         
            
            <NavLink to={'/home/medical'} >
            {isNavOpen ? 'Medical Support' : <FaBriefcaseMedical/>}
            </NavLink>
            <NavLink to="/home/employees" >
            {isNavOpen ? 'Homecare Services' : <AiOutlineShoppingCart/>}
            
            
            
            
            </NavLink>
            
            <NavLink to={'/home/fall'} >
            {isNavOpen ? 'Fall detection' : <GiFalling/>}
            
            
            
            
            </NavLink>

            
        
          
        
        

       
          
        

        </div>

        </div>
  );
};

export default Navbar;


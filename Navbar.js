import React from 'react';
import './Navbar.css'; 

import {Link} from 'react-router-dom';
const Navbar = () => {
  
  return (
   <nav className="navbar">
   <ul className="navbar nav">
  <li className="nav-item">
    <Link to="https://immensphere.com/" className="nav-link">
    Home</Link>
  </li>
     <li className="nav-item">
          <Link to="https://immensphere.com/about-us/" className="nav-link">
          About</Link>
        </li>
        <li className="nav-item">
          <Link to="https://immensphere.com/#homeOurService" className="nav-link">
          Services</Link>
        </li>
        <li className="nav-item">
          <Link to="https://immensphere.com/contact" className="nav-link">
          Contact</Link>
        </li>
      </ul>
      </nav>
    
  );
};

export default Navbar;

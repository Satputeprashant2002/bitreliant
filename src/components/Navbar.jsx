import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';  
import logo2 from './images/bit-rel.png';  

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  
  const handleClick = () => {
    setIsMobile(!isMobile);
  };

 
  const handleLinkClick = () => {
    if (isMobile) {
      setIsMobile(false); 
    }
  };

  return (
    <div className="navbar">
        <div className='ComName'>
            BITRELIANT
        </div>
        <div className="navbar-links">
          <ul className={isMobile ? "navbar-menu active" : "navbar-menu"}>
            <li><Link to="/" onClick={handleLinkClick}>HOME</Link></li>
            <li><Link to="/services" onClick={handleLinkClick}>SERVICES</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>ABOUT US</Link></li>
            <li><img src={logo2} alt="logo1" className="navbar-logo" /></li>
            <li><Link to="/career" onClick={handleLinkClick}>CAREER</Link></li>
            <li><Link to="/blog" onClick={handleLinkClick}>BLOG</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>CONTACT US</Link></li>
          </ul>
        </div>
        <img src={logo2} alt="logo1" className="navbar-logo1" />
        <div className="burger-icon" onClick={handleClick}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        <div className="round-div">
          {/* Add anything you want inside the round div */}
        </div>
    </div>
  );
};

export default Navbar;

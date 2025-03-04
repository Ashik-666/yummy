import React, { useState, useEffect } from 'react';
import './header.css';
import { Link } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`restaurant-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Yummy</h2>
        </div>
        
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="/home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#bookings">My Bookings</a></li>
          <li><a href="/restaurant">Restaurants</a></li>
          <li><a href="#shop-login">Shop Login</a></li>
          <li><a href="#user-login" className="nav-login-btn">User Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
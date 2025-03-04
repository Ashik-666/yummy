import React from 'react';
import './footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
  return (
    <footer className="restaurant-footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <h2>Yummy</h2>
          <p>Culinary Excellence in Every Bite</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i ><FaFacebook className='iconn'/></i></a>
            
            <a href="#" aria-label="Instagram"><i ><FaInstagram className='iconn'/></i></a>
            <a href="#" aria-label="X"><i ><FaXTwitter className='iconn'/></i></a>
            <a href ="#" aria-label='email'><i><BiLogoGmail className='iconn'/></i></a>
          </div>
        </div>
        
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li><i className="icon-location"></i> Kadavanthara Jn, eranakulam</li>
              <li><i className="icon-phone"></i> +91 9961780099</li>
              <li><i className="icon-email"></i> yummy10@gmail.com</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Opening Hours</h3>
            <ul>
              <li><span>Monday - Friday</span> 9:00 AM - 11:00 PM</li>
              <li><span>Saturday - Sunday</span> 9:00 AM - 11:00 PM</li>
              <li><span>Happy Hour</span> 4:00 PM - 6:00 PM</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li><a href="#">Menu</a></li>
              <li><a href="#">My Bookings</a></li>
              <li><a href="#">Restaurants</a></li>
              <li><a href="#">Shop Login</a></li>
              <li><a href="#">User Login</a></li>
             
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Yummy Restaurant. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
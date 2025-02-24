import React from "react";
import "./footer.css";
import { FaXTwitter,FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section">
          <h2 className="footer-logo">Yummy</h2>
          <p>Your go-to platform for amazing services and products.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">My Bookings</a></li>
            <li><a href="#">Restaurant</a></li>
            <li><a href="#">Shop Login</a></li>
            <li><a href="#">User Login</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookSquare /> <i className="fab fa-facebook"></i></a>
            <a href="#"><FaXTwitter /><i className="fab fa-twitter"></i></a>
            <a href="#"><FaSquareInstagram /><i className="fab fa-instagram"></i></a>
            <a href="#"><FaLinkedin /><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

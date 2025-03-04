import React from 'react';
import './banner.css';

function Banner() {
  return (
    <div className="restaurant-banner">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1>Yummy</h1>
        <p className="tagline">Culinary Excellence in Every Bite</p>
        <div className="banner-info">
          <div className="info-item">
            <i className="icon-clock"></i>
            <div>
              <p className="info-label">Opening Hours</p>
              <p>Mon-Sun: 9AM - 11PM</p>
            </div>
          </div>
          <div className="info-item">
            <i className="icon-location"></i>
            <div>
              <p className="info-label">Location</p>
              <p>Kadavanthara Jn, eranakulam</p>
            </div>
          </div>
          <div className="info-item">
            <i className="icon-phone"></i>
            <div>
              <p className="info-label">Reservations</p>
              <p>+91 9961780099</p>
            </div>
          </div>
        </div>
        <button className="reservation-btn">Book a Table</button>
      </div>
    </div>
  );
}

export default Banner;
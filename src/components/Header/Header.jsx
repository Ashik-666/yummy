import React from 'react'
import './header.css'
function Header() {
  return (
    <div className='nav'>
        <h2>yummy</h2>
        <div className="nav_opt">
            <h3>Home</h3>
            <h3>My Bookings</h3>
            <h3>Restaurant</h3>
            <h3>Shop Login</h3>
            <h3>User Login</h3>
        </div>
    </div>
  )
}

export default Header
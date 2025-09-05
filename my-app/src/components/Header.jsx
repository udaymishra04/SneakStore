import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="logo">SneakStore</a>
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/" className="nav-link">Brand</a>
          <a href="/" className="nav-link">Categories</a>
          <a href="/" className="nav-link">About</a>
          <a href="/" className="nav-link">Contact</a>
        </div>
        <div className="nav-button">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </nav>
    </header>
  )
}
export default Header;
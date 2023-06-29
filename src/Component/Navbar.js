import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Call handleResize initially
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="logo">Talk<span className="logo-highlight">Writer</span></span>
      </div>
      {isMobile && (
        <button className="menu-icon" onClick={toggleMenu}>
          ☰
        </button>
      )}
      <div className={`navbar-links ${menuOpen ? 'responsive' : ''}`}>
        <NavLink exact="true" to="/" className="nav-link" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

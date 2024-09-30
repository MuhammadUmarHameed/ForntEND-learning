import logo from '../images/logo.svg';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import React, { useState } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="#hero">
            <img src={logo} className="nav-logo" alt="logo" />
          </a>
          <button className="nav-toggle" id="nav-toggle" onClick={toggleLinks}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks showLinks={showLinks} />
        <SocialLinks />
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { pageLinks } from '../data';

const PageLinks = ({ showLinks }) => {
  return (
    <ul className={`nav-links ${showLinks ? 'show-links' : ''}`} id="nav-links">
      {pageLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href} id={link.id} className="nav-link">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PageLinks;

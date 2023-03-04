import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">WORLD</div>
        <ul className="nav-menu">
          <li className="nav-item">Yurtdışı Eğitim</li>
          <li className="nav-item">Work &amp; Travel</li>
          <li className="nav-item">
            {/* <Link to="/blog" className="nav-link"> */}
              Blog
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

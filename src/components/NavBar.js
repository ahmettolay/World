import React from 'react';
import { Link } from 'react-router-dom';



const NavBar= ()=>{
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        {/* <Link to="/" className="nav-logo"> */}
          WORLD
        {/* </Link> */}
        <ul className="nav-menu">
          <li className="nav-item">
            {/* <Link to="/education" className="nav-links"> */}
              Yurtdışı Eğitim
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/work-and-travel" className="nav-links"> */}
              Work &amp; Travel
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/blog" className="nav-links"> */}
              Blog
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

export default NavBar;

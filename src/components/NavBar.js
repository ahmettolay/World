import React from 'react';




const NavBar= ()=>{
  return (
    <nav className='navbar'>
     
        {/* <Link to="/" className="nav-logo"> */}
         <p>WORLD</p> 
        {/* </Link> */}
        <ul className="nav-menu">
          <li  className="nav-item">
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
     
    </nav>
    
  );
}

export default NavBar;

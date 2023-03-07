import React from 'react';
import {  Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink =({to, pageName}) =>{
  const resolved= useResolvedPath(to);
  const isActive= useMatch({path: resolved.pathname, end: true});
  return (
    <li className={`item ${isActive ? "active":""}`}>
       <Link to={to}>{pageName}</Link>
    </li>
  )
}


const navbar= () =>{
  return (
  <nav className='navbar'>
    <ul className='nav-menu'>
    <CustomLink to='/components/Page/HomePage' pageName="Homepage"/>
    <CustomLink to='/components/Page/Educations' pageName="Educations"/>
    <CustomLink to='/components/Page/Blog' pageName="Blog"/>
    <CustomLink to='/components/Pages/Info' pageName="About"/>
    
    
    </ul>
  </nav>

  );
}
export default navbar;
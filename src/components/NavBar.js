import React from 'react';
import {  Link } from "react-router-dom";


const navbar= () =>{
  return (
  <nav className='navbar'>
    <ul className='nav-menu'>
    <li className='nav-item'>
    <a href='/components/Page/HomePage'className='AnaSayfa'>Ana Sayfa</a>
    </li>
    <li className='nav-item'>
    <a href='/components/Page/Educations'>Yurt Dışı Eğitimler</a>
    </li>
    <li className='nav-item'>
      <a href='/components/Page/Blog' className='blog'>Blog</a>
    </li>
    
    <li className='nav-item'>
    <a href='/components/Page/Info'>Hakkımızda</a>
    </li>
    
    </ul>
  </nav>

  );
}
export default navbar;
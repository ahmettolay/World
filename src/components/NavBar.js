import React from 'react';
import {  Link } from "react-router-dom";



const navbar= () =>{
  return (
  <nav className='navbar'>
    <ul className='nav-menu'>
    <li className='nav-item'>
    <a href='/components/Page/HomePage'className='anaSayfa'>Ana Sayfa</a>
    </li>
    <li className='nav-item'>
    <a href='/components/Page/Educations'className='egitim'>Yurt Dışı Eğitimler</a>
    </li>
    <li className='nav-item'>
      <a href='/components/Page/Blog' className='blog'>Blog</a>
    </li>
    
    <li className='nav-item'>
    <a href='/components/Pages/Info'className='info'>Hakkımızda</a>
    </li>
    
    </ul>
  </nav>

  );
}
export default navbar;
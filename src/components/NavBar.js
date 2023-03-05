import React from 'react';
import {  Link } from "react-router-dom";


const navbar= () =>{
  return (
  <div>
    <li>
      <a href='/components/Page/Blog'>Blog</a>
      {/* <href"./components/Page/Blog">Dogs</href> */}
    </li>
    <li>
    <a href='/components/Page/HomePage'>Ana Sayfa</a>
    </li>
    <li>
    <a href='/components/Page/Info'>Hakkımızda</a>
    </li>
    <li>
    <a href='/components/Page/Educations'>Yurt Dışı Eğitimler</a>
    </li>
  </div>
  );
}
export default navbar;
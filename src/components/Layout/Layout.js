import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer";
import Navbar from "../Headers/NavBar"

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <div className="content-wrap">
    
    </div>
    
    </>
    
  );
};
export default Layout;
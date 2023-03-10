import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../../index.css";

const CustomLink = ({ to, pageName }) => {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: true });
  return (
    <li className={`item ${isActive ? "active" : ""}`}>
      <Link to={to}>{pageName}</Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" pageName="Homepage">
        <img src="https://i.ibb.co/6r1chNT/world.png" alt="world" className="img-logo" />
      </Link>

      <ul className="nav-menu">
        <CustomLink to="/" pageName="Homepage" />
        <CustomLink to="education" pageName="Educations" />
        <CustomLink to="blog" pageName="Blog" />
        <CustomLink to="about" pageName="About" />
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import Logo from "../../Assets/logo.png";
import "./Navbar.scss";
import { Link,useLocation } from "react-router-dom";

function Navbar() {
  const location =useLocation()
  console.log(location.pathname)
  return (
    <nav className="navbar">
      <div classname="navbar-logo">
        <img className="navbar-logo_img" src={Logo} alt="Logo" />
      </div>
      <ul className="navbar-nav">
      <Link to="/housing">  <li className={location.pathname==="/housing"?"navbar-nav_item active":location.pathname==="/"?"navbar-nav_item active":"navbar-nav_item"}>Housing</li></Link>
        <Link to="/health"><li className={location.pathname==="/health"?"navbar-nav_item active":"navbar-nav_item"}>Health</li></Link>
       <Link to="/income"> <li className={location.pathname==="/income"?"navbar-nav_item active":"navbar-nav_item"}>Economic status</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
 return (
  <header className="header">
   <div className="logo">
    <img src={logo} alt="logo-ramen-bowl" width={"10%"}/>
   </div>
   <div className="menu">
    <nav className="menu-items">
     <a href="">Login</a>
    </nav>
   </div>
  </header>
 );
};

export default Navbar;

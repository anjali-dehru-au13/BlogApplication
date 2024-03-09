import React from "react";
import logo from "../../assets/logo1.svg";
import { Link } from "react-router-dom";

const Header = () => {
 return (
  <main>
   <header className="header">
    <div className="logoDiv">
     <Link to="/">
      <img src={logo} slt="logo_here" className="logoImage" />
     </Link>
    </div>
    <nav>
     {/* <ul className="menu-items">
     <li>
      <a href="/">Home</a>
     </li>
     <li>
      <a href="/posts">Posts</a>
     </li>
     
    </ul> */}
     <div className="ButtonContainer">
      <Link to="posts">
       <h4 className="navLink">Blogs</h4>
      </Link>
     </div>
     <div className="ButtonContainer">
      <Link to="/register">
       <h4 className="navLink">Sign Up</h4>
      </Link>
     </div>
    </nav>
   </header>
  </main>
 );
};

export default Header;

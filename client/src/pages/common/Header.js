import React from "react";
import logo from "../../assets/bee.png";
import { Link } from "react-router-dom";

const Header = () => {
 return (
  <main>
   <header className="header">
    <div className="logoDiv">
     <Link to="/">
      {/* <img src={logo} slt="logo_here" className="logoImage" fill="white" /> */}
      <p className="navLink"> Logo Here</p>
     </Link>
    </div>
    <nav>
     <div className="ButtonContainer">
      <Link to="posts">
       <h4 className="navLink">Blogs</h4>
      </Link>
     </div>
     {/* <div className="ButtonContainer">
      <Link to="/register">
       <h4 className="navLink">Sign Up</h4>
      </Link>
     </div> */}
    </nav>
   </header>
  </main>
 );
};

export default Header;

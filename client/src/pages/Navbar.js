import React from "react";
import logo from "../assets/logo1.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
 return (
  <main>
   <header className="header">
    <div>
     <Link to="/">
      <img src={logo} slt="logo_here" width="5%" />
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
     <div style={{}}>
      <button className="loginButton">Login</button>
     </div>
    </nav>
   </header>
  </main>
 );
};

export default Navbar;

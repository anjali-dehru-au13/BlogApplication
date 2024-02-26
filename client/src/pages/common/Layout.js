import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import "../../App.css";

const Layout = () => {
 return (
  <main className="App">
   <Navbar />
   <Outlet />
  </main>
 );
};

export default Layout;

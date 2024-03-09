import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "../../App.css";
import Footer from "./Footer";

const Layout = () => {
 return (
  <main className="App">
   <Header />
   <Outlet />
   <Footer />
  </main>
 );
};

export default Layout;

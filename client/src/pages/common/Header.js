import React from "react";
import logo from "../../assets/bee.png";
import { Link } from "react-router-dom";

const Header = () => {
 return (
  <main>
   <header className="flex flex-row backdrop-brightness-75 backdrop-opacity-80 fixed top-0 left-0 right-0 py-4 ">
    <Link to="/" className="flex basis-1/2 ">
     {/* <img src={logo} slt="logo_here" className="logoImage" fill="white" /> */}
     <h2 className="text-white space-x-2 font-bold  px-4 py-2 text-xl ">
      {" "}
      Logo Here
     </h2>
    </Link>
    <nav className="flex basis-1/3 justify-end space-x-5">
     {[
      ["Blogs", "/posts"],
      ["Login", "/login"],
     ].map(([title, url]) => (
      <Link to={url}>
       <h3 className=" text-xl rounded-lg px-4 py-2 text-white hover:bg-slate-100 hover:text-slate-900 ">
        {title}
       </h3>
      </Link>
     ))}
    </nav>
   </header>
  </main>
 );
};

export default Header;

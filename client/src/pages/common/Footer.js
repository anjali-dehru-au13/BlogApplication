import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
 return (
  <div className="footerDiv flex flex-row backdrop:backdrop-opacity-25 ">
   <div className="basis-1/2">
    <h3>Logo Here</h3>
   </div>
   <div className="flex flex-row basis-1/2 justify-normal align-middle">
    {[
     ["Home", "/"],
     ["About", "/about"],
     ["Blogs", "/posts"],
     ["Login", "/login"],
     ["Register", "/signUp"],
     ["Contact", "/contact"],
    ].map(([title, url]) => (
     <Link
      to={url}
      className="flex justify-center basis-1/6 text-m  hover:border-y-1 hover:border-x-2 "
     >
      <h3>{title}</h3>
     </Link>
    ))}
   </div>
  </div>
 );
};

export default Footer;

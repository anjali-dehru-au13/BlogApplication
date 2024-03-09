import React from "react";
import Posts from "../Posts/Posts";
import "./home.css";
const Home = () => {
 return (
  <div>
   <div className="FirstDiv">
    {/* <img src={bgImage} alt="background-image" width={"100%"} /> */}
    <p className="titleText">Explore New Horizons</p>
    <p className="titleText subText"> And Dive Deeper into creativity</p>
   </div>
   <Posts />
  </div>
 );
};

export default Home;

const styles = {};

import React from "react";
import ramenBowl from "../../assets/ramen-bowl.png";
import "./Posts.css";
const Home = () => {
 return (
  <div className="post">
   <img src={ramenBowl} alt="post image" width="50%" />
   <div
    style={
     {
      // border: "1px solid #000",
      // borderRadius: "18px",
      // padding: "4%",
     }
    }
    className="postDetails"
   >
    <h2 className="title"> Where can I get some?</h2>
    <p style={{}}>
     <a>Author</a>
     <time>2024-01-01 16:45</time>
    </p>
    <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua. Habitant morbi
     tristique senectus et netus et malesuada fames. Lectus magna fringilla urna
     porttitor rhoncus dolor purus non. Id venenatis a condimentum vitae sapien
     pellentesque. Accumsan tortor posuere ac ut consequat semper viverra. Dui
     accumsan sit amet nulla. Sapien eget mi proin sed libero enim sed. Cras
     tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Quam
     elementum pulvinar etiam non quam lacus. Cursus eget nunc scelerisque
     viverra. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.
    </p>
   </div>
  </div>
 );
};

export default Home;

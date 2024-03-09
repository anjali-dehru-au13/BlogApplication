import React, { useEffect, useState } from "react";
import ramenBowl from "../../assets/ramen-bowl.png";
import "./Posts.css";
import axios from "axios";
const Posts = () => {
 const [posts, setPosts] = useState({});

 const [pending, setPending] = useState(true);
 async function fetchListOfBlogs() {
  const response = await axios.get("http://localhost:5000/api/blogs");
  const result = await response.data;
  if (result && result?.blogList && result?.blogList?.length) {
   setPosts(result?.blogList);
   setPending(false);
  } else {
   setPending(true);
  }
 }
 useEffect(() => {
  fetchListOfBlogs();
 }, []);

 return (
  <>
   <div className="heading">
    <h2>Recent Blogs</h2>
   </div>
   <div className="BlogCards">
    {pending ? (
     <h1 style={{ padding: "8%" }}>Loading...</h1>
    ) : (
     posts.map((post) => {
      return (
       <div className="blogList" key={post?.id}>
        <div className="imageDiv">
         <img src={ramenBowl} alt="post image" className="blogImage" />
        </div>
        <div className="blogDetails">
         <h2 className="title"> {post?.title}</h2>
         <p style={{}}>
          <time>{post?.createdAt}</time>
         </p>
         <p>{post?.description}</p>
        </div>
       </div>
      );
     })
    )}
   </div>
  </>
 );
};

export default Posts;

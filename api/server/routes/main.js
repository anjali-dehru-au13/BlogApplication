const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const {
 fetchListOfBlogs,
 addNewBlog,
 deleteBlog,
} = require("../controller/blogController");
// insertPost();

router.get("/", fetchListOfBlogs);
router.post("/add", addNewBlog);
router.delete("/deleteBlog/:id", deleteBlog);

// function insertPost() {
//  Post.insertMany([
//   {
//    title: "Blog Title here",
//    description: "this is the post description",
//   },
//   {
//    title: "Blog Title here",
//    description: "this is the post description",
//   },
//   {
//    title: "Blog Title here",
//    description: "this is the post description",
//   },
//   {
//    title: "Blog Title here",
//    description: "this is the post description",
//   },
//   {
//    title: "Blog Title here",
//    description: "this is the post description",
//   },
//  ]);
// }
console.log(Post);
module.exports = router;

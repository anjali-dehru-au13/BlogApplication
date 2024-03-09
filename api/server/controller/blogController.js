const mongoose = require("mongoose");
const Post = require("../models/Post");

// fetch blogs
// add new blog
// delete blog
// upate blog

const fetchListOfBlogs = async (req, res) => {
 let blogList;
 try {
  blogList = await Post.find();
 } catch (err) {
  statusCode = err?.code || 500;
  response.status = false;
  response.message = err?.message || "Network Error!";
  response.error = err;
 }
 if (!blogList) {
  return res.status(404).json({ message: "No Blogs Found" });
 }

 return res.status(200).json({ blogList });
};

const addNewBlog = async (req, res) => {
 const { title, description } = req.body;
 const currentDate = new Date();
 const newCreatedBlog = new Post({
  title,
  description,
  date: currentDate,
 });
 try {
  await newCreatedBlog.save();
 } catch (err) {
  console.log(err);
 }
 try {
  const session = await mongoose.startSession();
  session.startTransaction();
  await newCreatedBlog.save(session);
  session.commitTransaction();
 } catch (err) {
  return res.send(500).json({ message: e });
 }
 return res.status(200).json(newCreatedBlog);
};

const deleteBlog = async (req, res) => {
 const id = req.params.id;

 try {
  const findCurrentBlog = await Post.findByIdAndDelete(id);
  if (!findCurrentBlog) {
   return res.status(404).json({ message: "blog not found" });
  }
  return res.status(200).json({ message: "Deleted successfully" });
 } catch (err) {
  console.log(err);
  return res
   .status(500)
   .json({ message: "Unable to delete ! Please try again" });
 }
};

module.exports = { fetchListOfBlogs, deleteBlog, addNewBlog };

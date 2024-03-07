require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./server/config/db");

const cors = require("cors");
const User = require("./server/models/User");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(18);
const router = require("./server/routes/main");
//connect to db
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/blogs", router);
app.post("/register", async (req, res) => {
 const { email, username, password } = req.body;
 try {
  const userData = await User.create({
   email,
   username,
   password: bcrypt.hashSync(password, salt),
  });
  res.json(userData);
 } catch (error) {
  res.status(400).json(error);
 }
});

app.listen(PORT, () => {
 console.log(`App listening on port ${PORT}`);
});

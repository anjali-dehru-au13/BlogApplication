require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./server/config/db");

const cors = require("cors");

//connect to db
connectDB();

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
 const { email, username, password } = req.body;
 res.json({ requestData: { email, username, password } });
});

app.listen(PORT, () => {
 console.log(`App listening on port ${PORT}`);
});

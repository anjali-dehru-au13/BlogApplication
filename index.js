require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const connectDB = require("./server/config/db");

//connect to db
connectDB();

app.get("/", (req, res) => {
 res.send({ hi: "there" });
});

app.listen(PORT, () => {
 console.log(`App listening on port ${PORT}`);
});

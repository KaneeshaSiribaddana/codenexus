const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const url = process.env.MONGODB_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connection Success!");
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error);
  });

 const studentsRouter = require("./routes/students.js");
 app.use("/students", studentsRouter);
app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});

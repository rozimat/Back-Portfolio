require("dotenv").config();
const express = require("express");
const cors = require("cors")
const routes = require("./routes")
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use("/api", routes)
const PORT = process.env.PORT || 3000;
app.listen(3000, ()=>{
  console.log(PORT); 
})
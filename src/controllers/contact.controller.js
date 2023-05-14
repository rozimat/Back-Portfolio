const { v4 : uuid } = require("uuid");
const Io = require("../utils/Io");
const Data = new Io("./database/info.data.json")
const Comment = require("../models/Comment");


exports.Rread = async (_,res)=>{
  const contactUser = await Data.read()
  console.log(contactUser);
  res.status(200).json({ message: "Sucsesfully"})
}

exports.Rcreate = async (req,res)=>{
  const contactUser = await Data.read();
  const id = uuid();
  
  const { fullname, email, text } = req.body;
  const user = new Comment(id, fullname, email, text);
  const data = contactUser.length ? [...contactUser, user] :[user];
  Data.write(data);
  res.status(201)
}
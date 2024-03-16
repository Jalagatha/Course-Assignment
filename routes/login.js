import express from "express";
// import loginRouter from "../router/login.js";


const loginRouter = './routes/login.js';

const user = "ivan";
const pas = "ivan1234";

post("/login", function (req, res, login) {
  const { username, password } = req.body;
  if (username && password) {
    if (username !== user&&password !== pas) {
      res.status(500)
        .json({ msg: "Invalid User" });

    }
    res.status(200).json({ msg: `"Welcome ${username}"` });
    login("/node-course");
  
 
 } else {
    res.status(400).json({ msg: "Enter Username And Password" });
  }

});

export default loginRouter;

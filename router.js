const Router=require('express');
const { registerUser, loginUser, getUser, addTask } = require('./methods');


const userRouter=Router();

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/profile",getUser)
userRouter.put("/addtask",addTask)

module.exports=userRouter
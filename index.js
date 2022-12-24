
const express=require('express');
const connectDatabase = require('./db');
const user_model = require('./model');
const userRouter = require('./router');
const cors=require('cors')

const app=express();
app.use(cors());
app.use(express.json());

const port=8080;
app.use("/user",userRouter)
 app.get("/",async (req,res)=>{
    let count=await user_model.find()
    res.send({data:count})
 })

app.listen(port,()=>{
    connectDatabase();
    console.log(`server running on port ${port}`);
})
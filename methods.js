const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const user_model = require('./model');


async function registerUser(req,res){
    let user=req.body;
    user.tasks=[]
    try{
     let user=req.body;


     let pass=bcrypt.hashSync(user.password,10);
    
 
 
  user.password=pass;
 let  exist=await user_model.findOne({email:user.email});
 if(exist){
      res.status(400).send("User exists already")
 }
 else{
  exist=await user_model.create(user);
  exist=exist.toJSON();
  delete exist.password;
    res.send({
     status:"success",
     data:exist
    })
  }
}
  catch(err){
     console.log(err);
  }

}
async function loginUser(req,res){
    let user=req.body;
    try{
    let existing=await user_model.findOne({user_name:user.user_name})
    if(existing){
      let match=bcrypt.compareSync(user.password,existing.password);
      if(match){
    let token=jwt.sign({email:user.email,user_name:user.user_name},"token")
    res.send({
      status:"success",
      data:existing
    });
   }
   else{
      res.status(400).send('invalid password')
   }
    }
    else{
      res.status(404).send("User not found");
    }
   }
   catch(err){
      console.log(err);
   }
 
  
}
async function getUser(req,res){
    let token=req.headers.authorization.split(" ")[1];
     let user=jwt.verify(token,"token");
     let currentuser=await user_model.findOne({email:user.email})
     res.send(currentuser);


}
async function addTask(req,res){
  
     let {user,task}=req.body
     console.log(task);
     let currentuser=await user_model.findOne({email:user})
     let curr=currentuser.tasks
     curr.push(task)
     let updated=await user_model.findOneAndUpdate({email:user},{tasks:curr},{new:true})
    
     res.send(updated)
     
}


module.exports={registerUser,loginUser,getUser,addTask}
const mongoose=require('mongoose');

let user_schema=new mongoose.Schema({
    
    user_name:{type:String},
    password:{type:String},
    email:{type:String},
    tasks:[String]
},
    {
        versionKey:false,
        timestamps:true
    }

)

let user_model=mongoose.model("tasks",user_schema);

module.exports=user_model;
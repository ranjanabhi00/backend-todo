const mongoose=require('mongoose');



const uri=`mongodb+srv://Abhishek:Abhishek1234@cluster0.lmieazm.mongodb.net/todo`
function connectDatabase(){
    mongoose.connect(uri)
    .then(()=>{
     console.log("Connected to Database")
    })
    .catch((err)=>{
        console.log(err);
       
     console.log("Not Connected to Database")
    })
 
 }
 
 module.exports =connectDatabase;




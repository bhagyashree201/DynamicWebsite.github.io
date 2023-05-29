const mongoose=require("mongoose");

//creating database
mongoose.connect("mongodb://0.0.0.0:27017/DynamicWebsite",{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful");

}).catch((error)=>{
    console.log(error);
})


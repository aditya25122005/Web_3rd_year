const express= require('express');
const app= express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demo')
.then(()=>{
    console.log("DB connected ");
})
.catch((err)=>{
    console.log("Error:",err);
})


app.get('/',(req,res)=>{
    res.send("Welcome");
})

app.listen(8080,()=>{
    console.log("Server Connected at Port 8080");
})
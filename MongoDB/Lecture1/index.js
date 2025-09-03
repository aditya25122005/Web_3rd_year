const express= require('express');
const app= express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aditya25pda:rtw4ICPPvO3W5tf2@cluster0.xxxsrdy.mongodb.net/')
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
const express= require('express');
const app=express();
const path=require('path');


app.set('view engine',"ejs")// view engine ko set kar diya hai taki templates dekh pao

//By default it was  cwd+/views  (but if we are not on cwd then there will be problem so we use __dirname

app.set('views',path.join(__dirname,'views'))



const todos=['go to gym','go to bar','pray'];


//root route
app.get('/',(req,res)=>{
    // res.send("Hi")
    res.render('index');
})

//random file route
app.get('/random',(req,res)=>{
    let num= Math.floor(Math.random() *100)
    res.render('random',{num});

})

//todo route

app.get('/todo',(req,res)=>{
    res.render('todos',{todos});
})





app.listen(8080,()=>{
    console.log("server started at port 8080");
    
})
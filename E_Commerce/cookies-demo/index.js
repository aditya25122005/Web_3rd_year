const express= require('express');
const app= express();
const cookieParser= require('cookie-parser');

// app.use(cookieParser());
app.use(cookieParser('A secret'));

app.get('/',(req,res)=>{
    console.log(req.cookies);
    res.send(req.cookies);
    // res.send(req.signedCookies);
    
    
})

app.get('/setcookie',(req,res)=>{
    res.cookie('mode','dark');
    res.cookie('location','kasganj');
    res.cookie('user','Aditya');
    res.send("Server sent you cookies")
})

app.get('/getcookies',(req,res)=>{// want to see cookies
   let{mode,location,user}= req.cookies;
   res.send(`Hi My name is ${user} I stay in ${location} and My fav. theme is ${mode}`)
})
// signed cookie
app.get('/getsignedcookies',(req,res)=>{
    res.cookie('Bindass','Aditya',{signed:true});
    res.send("Cookies sent successfully");

})

app.listen(8080,()=>{
    console.log("Server connected at 8080");
    
})


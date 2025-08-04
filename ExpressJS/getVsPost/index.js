const express=require('express');
const app=express();
const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));  // templating files
app.use(express.static(path.join(__dirname,'public')));  // static files
app.use(express.urlencoded({extended:true}))  // middleware to get the form data(POST)
// root route
app.get('/',(req,res)=>{
    res.render('index');
})


// handle GET request
app.get('/user',(req,res)=>{
    console.log(req.query);
    let {username,userage}=req.query;
    res.send('Get req. sent successfully')
    console.log(userage);
    console.log(username);
    
})

// handle POST request

app.post('/user',(req,res)=>{
    console.log(req.body);
    
    res.send("Through POST method");
})


app.listen(8080,()=>{
    console.log("server connected at port 8080");
    
})
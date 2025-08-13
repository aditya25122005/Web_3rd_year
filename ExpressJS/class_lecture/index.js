const express= require('express');
const path= require('path');
const app= express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.get('/',(req,res)=>{
    res.send("Welcome to root route")
})
app.get('/aditya',(req,res)=>{
    res.render('index');
    
})


// app.get('*', (req, res) => {
//     res.status(404).send("Error: The requested route does not exist.");
// });

app.listen(8080,()=>{
    console.log(" Server Connectes to port 8080");
    
})
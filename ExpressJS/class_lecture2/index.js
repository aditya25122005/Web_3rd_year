const express= require('express');
const app= express();
const path= require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));  // body parsing middleware(by default undefined)
// app.use is a middleware which runs on every request

let password=800;
app.use((req,res,next)=>{
    if(password===800){  // If password not 800 then the next route will not run , req ki cycle yahi se end ho jayegi
        next();
    }
    else{
        res.send("Sorry nhi h payega");
    }
})


app.get('/',(req,res)=>{
    res.send("Hello from root route");
})
let arr=[
    {
        id:0,
        author:"Aditya",
        comment:"Hello Aditya"

    },{
        id:1,
        author:"Narendra",
        comment:"Namo"

    },{
        id:2,
        author:"Ram",
        comment:"Jai Shri Ram"

    },{
        id:3,
        author:"bvnjm",
        comment:"vhjrncfkmd"

    },{
        id:4,
        author:"Not Defined",
        comment:"Kuch nahi"
    }
]
// Create
app.get('/blog/new',(req,res)=>{
    res.render('blogs/new')
})

// Read
app.get('/blogs',(req,res)=>{
    res.render('blogs/index',{arr});

})
let len=arr.length;
app.post('/blogs',(req,res)=>{
    let {author, comment}= req.body;
    arr.push({id:len,author,comment});
    res.redirect('/blogs');
})

app.listen(8080,()=>{
    console.log("Server connected at Port 8080");
    
})


const express= require('express');
const app= express();
const path= require('path');
const methodOverride = require('method-override')
const { v4: uuidv4 } = require('uuid');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));  // body parsing middleware(by default undefined)
// app.use is a middleware which runs on every request

app.use(methodOverride('_method'));  // middleware of patch/ put/ delete
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
        id:uuidv4(),
        author:"Aditya",
        comment:"Hello Aditya"

    },{
        id:uuidv4(),
        author:"Narendra",
        comment:"Namo"

    },{
        id:uuidv4(),
        author:"Ram",
        comment:"Jai Shri Ram"

    },{
        id:uuidv4(),
        author:"bvnjm",
        comment:"vhjrncfkmd"

    },{
        id:uuidv4(),
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
    arr.push({id:uuidv4(),author,comment});
    res.redirect('/blogs');
})

// show a particular blog
app.get('/blogs/:id',(req,res)=>{
    let {id}=req.params;
    let foundBlog= arr.find((blog)=>blog.id==id)
    
    
    res.render('blogs/show',{foundBlog});

})

// edit

app.get('/blogs/:id/edit',(req,res)=>{
    let {id}= req.params;
    let foundBlog= arr.find((blog)=>blog.id==id)
    res.render('blogs/edit',{foundBlog})
})

app.patch('/blogs/:id',(req,res)=>{
    let {id}= req.params;
    let foundBlog= arr.find((blog)=>blog.id==id);
    let {author,comment}=req.body;
    foundBlog.author=author;
    foundBlog.comment=comment;

    res.redirect('/blogs');


})

// Delete
// app.get('/blogs/:id',(req,res)=>{
//     let {id}= req.params;
//     let foundBlog= arr.find((blog)=>blog.id==id);
//     res.render('blogs/delete',{foundBlog});
// })

app.delete('/blogs/:id',(req,res)=>{
    let {id}= req.params;
    let newArr= arr.filter((blog)=> {return id != blog.id})

    arr=newArr
    res.redirect('/blogs');
})


app.listen(8080,()=>{
    console.log("Server connected at Port 8080");
    
})


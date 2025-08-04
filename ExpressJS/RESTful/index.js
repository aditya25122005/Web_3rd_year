const { log } = require('console');
const express= require('express');
const app= express();
const path= require('path');


app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))

//dummy array instead of DB
let comments=[
    {id:0,
        username:"Aditya",
        comment:"what??"
    },
    {id:1,
        username:"Ankit",
        comment:"Kuch nhi"
    },

    {id:2,
        username:"sakshi",
        comment:"when??"
    },
    {id:3,
        username:"sneha",
        comment:"Never"
    },

]

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//root
app.get('/',(req,res)=>{
    res.send("root me aapka swagat hai");
})


// Task-1  --->>Display all the blogs
app.get('/blogs',(req,res)=>{
    res.render('index',{comments})   // kaha dikhana hai --> index par ,,,, Kya dikhana hai ---> Object of comments
})



// task -2 ---->  create form
app.get('/blog/new',(req,res)=>{
    res.render('new');
})


// Task-3 ----->to Actually Add new Blog to DB(array) , Post request 

app.post('/blogs',(req,res)=>{
    // console.log(req.body);
    // res.send("Data aa gaya")

    let{username,comment}=req.body;
    comments.push({username,comment,id:comments.length});
    res.redirect('/blogs')   // get req. ja rahi hai
    
})




app.listen(8080,()=>{
    console.log(" server running at Port 8080");
    
})
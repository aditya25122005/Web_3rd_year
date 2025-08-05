const { log } = require('console');
const express= require('express');
const app= express();
const path= require('path');
const methodOverride = require('method-override');
const {v4:uuid}=require('uuid');


app.use(express.static(path.join(__dirname,'public')));   // css 
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))  // _method is the name  (Method overriding for POST to patch)


//dummy array instead of DB
let comments=[
    {
        // id:0,
        id:uuid(),    // returns an id that is a string
        username:"Aditya",
        comment:"what??"
    },
    {
        // id:1,
        id:uuid(),
        username:"Ankit",
        comment:"Kuch nhi"
    },

    {
        // id:2,
        id:uuid(),
        username:"sakshi",
        comment:"when??"
    },
    {
        // id:3,
        id:uuid(),
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
    comments.push({username,comment,id:uuid()});
    res.redirect('/blogs')   // get req. ja rahi hai
    
})

// Task-->4 (To show info about one particular blog)

app.get('/blogs/:id', (req, res) => {
    let {id} = req.params;  // gives String
    let foundComment = comments.find(comment => comment.id == id); // use == for typecasting bcoz id is String
    // res.send("Show particular page")
    console.log(typeof foundComment);
    
    res.render('show',{foundComment})
});


// Task 5--> to get the form for editing comment
app.get('/blogs/:id/edit',(req,res)=>{
    let {id}=req.params;  //: --> path parameter--> parms se id lenge --> destructure it
    let foundComment=comments.find(comment=> comment.id==id);
    console.log(foundComment);
    // res.send("Edit form aa gaya")
    res.render('Edit',{foundComment})
    
})


// Task6 --> Update Blog 

app.patch('/blogs/:id',(req,res)=>{               // we use patch because we are doing partial changes
let {id}= req.params;
let foundComment=comments.find(comment=> comment.id==id);
let {comment}=req.body;   // get edited comment
foundComment.comment=comment;  // changing previous comment to newly edited comment
res.redirect('/blogs');

})

// Task -7  ---> To delete a blog from array/ DB

app.delete('/blogs/:id',(req,res)=>{
    let {id}=req.params;
    // use filter array method
    let newComment=comments.filter((comment)=>{
        return id!=comment.id;   // get element in array if id is not equal to id which we want to delete
    })
    comments=newComment;
    res.redirect('/blogs');

})


app.listen(8080,()=>{
    console.log(" server running at Port 8080");
    
})
let express=require('express')
let app=express();


// app.get('/',(req,res)=>{
//     res.send('Root route hai')
// })


// app.get('/r/banana',(req,res)=>{
//     res.send('vbanana route hai');
// })

// app.get('/r/orange',(req,res)=>{
//     res.send("Orange route hai")
// })

// app.get('/r/cat',(req,res)=>{
//     res.send("cat route hai")
// })

//infinite route

app.get('/r/:subreddit',(req,res)=>{
    console.log(req.params);
    let {subreddit}= req.params;  // { subreddit: 'samarth' }
    res.send(`<h1>My route was ${subreddit}</h1>`)

})







app.listen(8080,()=>{
    console.log("Server is running at port 8080");
    
})
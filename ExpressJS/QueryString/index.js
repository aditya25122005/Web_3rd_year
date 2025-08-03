const express= require('express');
const app=express();

app.get('/search',(req,res)=>{
    // res.send("a dnm")
    console.log(req.query);
    console.log(req.query.search); //output 1

    //destructure
    let {search}=req.query;
    console.log(search);  //output 2
    

    //Output 2 and output 1 are same 
    

    // res.send(search);             //->> movies games
    // res.send(req.query)    //Object
    // res.send(req.query.search)    //->> movies games

})


app.listen(8080,()=>{
    console.log("Server started at port 8080");
    
})

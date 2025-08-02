const express=require('express');
const app= express();


// adding app.use

// without path i.e. for all incoming reqest

//A Middleware function

// app.use((req,res)=>{  // accepts a callback function
//     // console.log(req);
    
//     console.log("You made a request Aditya");

//     res.send('<h1>This Is My h1</h1>')
// })


// with path i.e. for specific path only and not in other cases
app.use('/middleware',(req,res)=>{
    console.log('You made a request at specific middleware');
    res.send('<h1> Jai Shri Ram</h1>');
    
})


app.listen(8080,()=>{
    console.log("server connected at port 8080");
    
})


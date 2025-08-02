const express=require('express');  // returns a function
const app=express(); // Returns an Object
// app is an object(instance of webapp)

//This app is an instance to your entire application
console.log(app);

// Ask server to listen to your request

// app.listen(8080,()=>{console.log("Server Connected at port 8080");
// })



app.listen(8080)
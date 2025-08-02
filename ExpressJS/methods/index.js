const express=require('express');
const app=express();



//get my headers


//handle bad request


app.get('/',(req,res)=>{  // path,callback
    res.send('<h1>ye mera "/" path hai</h3>')
})  


app.get('/cat',(req,res)=>{  // path,callback
    res.send('<h1>ye mera "/cat" path hai</h3>')
})  


app.get('/dog',(req,res)=>{  // path,callback
    res.send('<h1>ye mera "/dog" path hai</h3>')
})  


app.get('/orange',(req,res)=>{  // path,callback
    res.send('<h1>ye mera "/orange" path hai</h3>')
})

app.get('/watermelon',(req,res)=>{  // path,callback
    res.send('<h1>Laal hai poora thela laal hai</h3>')
})  


// app.get('*',(req,res)=>{
//     res.send('You hit a bad Request Try something else')

// })
app.use((req, res) => {
    res.status(404).send('You hit a bad request.');
});


app.listen(8080,()=>{
    console.log("server connected at port 8080");
    
})
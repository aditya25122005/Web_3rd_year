const express= require('express');
const app= express();
const path= require('path');
const seedDB=require('./seed')
const mongoose = require('mongoose');
const productRoutes = require('./routes/product');
const ejsMate=require('ejs-mate');
const methodOverride= require('method-override');

mongoose.connect('mongodb://127.0.0.1:27017/cartify')
.then(()=>{
    console.log("DB Connected Successfully");
    
})

.catch((err)=>{
    console.log("DB connection error");
    console.log(err);
})
app.engine('ejs',ejsMate);   // tells Express to use engine ejs-mate for rendering ejs files

app.set('view engine','ejs'); // view engine ka kaamm hai ejs file ko read karna   
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public'))); // for public folder
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));


// seeding database
//(we are using nodemon it will always restart server when we switch tabs; so againand again seed file will run and dummy data will be copy pasted again and again)
// so we should run seedDB once and then commit it

// seedDB();

app.use(productRoutes); // so that har incoming req ke liye path check kiya jaye

app.listen(8080,()=>{
    console.log("Server connected at port 8080");
    
})


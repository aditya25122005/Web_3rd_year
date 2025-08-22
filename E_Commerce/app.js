const express= require('express');
const app= express();
const path= require('path');
const seedDB=require('./seed')
const mongoose = require('mongoose');
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const ejsMate=require('ejs-mate');
const methodOverride= require('method-override');  // eg  used in Podt to delete conversion
const flash= require('connect-flash');
const session= require('express-session');

mongoose.connect('mongodb://127.0.0.1:27017/cartify')
.then(()=>{
    console.log("DB Connected Successfully");
    
})

.catch((err)=>{
    console.log("DB connection error");
    console.log(err);
})

let configSession={
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
//   cookie: { secure: true }
}

app.engine('ejs',ejsMate);   // tells Express to use engine ejs-mate for rendering ejs files
app.set('view engine','ejs'); // view engine ka kaamm hai ejs file ko read karna   
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public'))); // for public folder
app.use(express.urlencoded({extended:true}))   // req.body se content lene ke liye
app.use(methodOverride('_method'));
app.use(session(configSession));
app.use(flash());
app.use((req,res,next)=>{
    res.locals.success= req.flash('success');
    res.locals.error=req.flash('error');
    next();
})






// seeding database
//(we are using nodemon it will always restart server when we switch tabs; so againand again seed file will run and dummy data will be copy pasted again and again)
// so we should run seedDB once and then commit it

// seedDB();

app.use(productRoutes); // so that har incoming req ke liye path check kiya jaye
app.use(reviewRoutes);
app.listen(8080,()=>{
    console.log("Server connected at port 8080");
    
})


const express= require('express');
const app= express();
const path= require('path');
const seedDB=require('./seed')
const mongoose = require('mongoose');
const ejsMate=require('ejs-mate');
const methodOverride= require('method-override');  // eg  used in Podt to delete conversion
const flash= require('connect-flash');
const session= require('express-session');
const passport= require('passport')
const localStrategy= require('passport-local');
const User= require('./models/User.js');

const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const authRoutes= require('./routes/auth.js');


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
  cookie: {
    httpOnly:true,
    expires: Date.now() + 24*7*60*60*1000,
    maxAge:24*7*60*60*1000
   }
}

app.engine('ejs',ejsMate);   // tells Express to use engine ejs-mate for rendering ejs files
app.set('view engine','ejs'); // view engine ka kaamm hai ejs file ko read karna   
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public'))); // for public folder
app.use(express.urlencoded({extended:true}))   // req.body se content lene ke liye
app.use(methodOverride('_method'));
app.use(session(configSession));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use((req,res,next)=>{
    res.locals.currentUser= req.user;
    res.locals.success= req.flash('success');
    res.locals.error=req.flash('error');
    next();
})

//Passport
passport.use(new localStrategy(User.authenticate()));





// seeding database
//(we are using nodemon it will always restart server when we switch tabs; so againand again seed file will run and dummy data will be copy pasted again and again)
// so we should run seedDB once and then commit it

// seedDB();

app.use(productRoutes); // so that har incoming req ke liye path check kiya jaye
app.use(reviewRoutes);
app.use(authRoutes);

app.listen(8085,()=>{
    console.log("Server connected at port 8080");
    
})


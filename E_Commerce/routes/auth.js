const express=require('express');
const User = require('../models/User');
const passport = require('passport');

const router=express.Router();
// to-show the form register page
router.get('/register',(req,res)=>{
    res.render('auth/signup')
})

// actualy register a user in DB
router.post('/register',async (req,res)=>{
    try{
    let {email,password,username,role}=req.body;
    const user=new User({email,username,role})
    const newUser=await User.register(user,password);
    // res.send(newUser);
    // res.redirect('/login')
    req.login(newUser,function(err){
        if (err) {
        req.flash('error', 'Something went wrong after signup.');
        return res.redirect('/login');
      }
      req.flash('success', 'Welcome!');
      res.redirect('/products');
    });
    }
    catch(e){
       if (e.name === 'UserExistsError') {
      req.flash('error', 'User with that username already exists.');
      return res.redirect('/register');
    }
    if (e.code === 11000) { // duplicate key error from Mongo
      req.flash('error', 'Email already registered.');
      return res.redirect('/register');
    }
    req.flash('error', 'Cannot sign up. Please try again.');
    res.redirect('/register');
  
    }

})

// to get Login form
router.get('/login',(req,res)=>{
    res.render('auth/login');

})

// to actually Login bia db
router.post('/login',       // local strategy
    passport.authenticate('local',{
            failureRedirect: '/login', // if fail
            failureMessage: true 
        }),
        (req,res)=>{
            console.log(req.user);
            
        req.flash('success','Welcome back to Cartify');
        res.redirect('/products')
})

//logout
router.get('/logout',(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash('success','Logged Out Successfully!');
        res.redirect('/login');
    });
});


module.exports=router;
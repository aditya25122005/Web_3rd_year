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
            let {email,password,username}=req.body;
    const user=new User({email,username})
    const newUser=await User.register(user,password);
    // res.send(newUser);
    // res.redirect('/login')
    req.login(newUser,function(err){
        if(err){return next(err);}
        req.flash('success','welcome to Cartify');
        return res.redirect('/products');
    })
    }
    catch(e){
        req.flash('error',e.message);
        return res.redirect('/signup')
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
router.get('/logout',(req,res)=>{
    ()=>{
        req.logout();
    }
    req.flash('success','Logged Out Successfully!')
    res.redirect('/login');
})


module.exports=router;
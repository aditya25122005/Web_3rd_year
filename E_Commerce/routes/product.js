const express= require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');

const router=express.Router();// mini instance
const {validateProduct}=require('../middleware');
const {validateReview}= require('../middleware');

// to show all the products
router.get('/products',async(req,res)=>{
    // Jo bhejna hai wo database se nikalenge
    try{
    let products=await Product.find({});
    res.render('products/index',{products}); // render ke liye kuch bhejna padega
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }

})


// to show the form to add new products
router.get('/product/new',(req,res)=>{
    try{
    res.render('products/new');
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})


// to actually add the product
router.post('/products',validateProduct,async(req,res)=>{
    try{
    let{name,img,price,desc}=req.body;
    await Product.create({name,img,price,desc}) // add in database
        req.flash('success','Product added successfully')
    res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})


// to show a particular product
router.get('/products/:id', async(req,res)=>{
    try{
    let{id}=req.params;  // get id from the url
    let foundProduct=await Product.findById(id).populate('reviews'); // get id from database
    res.render('products/show',{foundProduct,msg:req.flash('msg')})
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})

// form to edit the product

router.get('/products/:id/edit',async(req,res)=>{
    try{
    let {id}=req.params;
    let foundProduct=await Product.findById(id);
    res.render('products/edit',{foundProduct});
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})


// actually update about a product
router.patch('/products/:id',validateProduct,async(req,res)=>{
    try{
    let {id} = req.params;
    let {name,img,price,desc}=req.body;
    await Product.findByIdAndUpdate(id,{name,img,price,desc});
    req.flash('success','Product edited successfully')
    res.redirect(`/products/${id}`);
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})


// to delete a product

router.delete('/product/:id', async(req,res)=>{
    try{
    let {id} = req.params;
    const product=await Product.findById(id);
    // for(let id of product.reviews){ //Product se Jo review ki id mili
    //     await Review.findByIdAndDelete(id) // usko Review array se delete
    // }

    
    await Product.findByIdAndDelete(id);
        req.flash('success','Product deleted successfully')
    res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})


module.exports=router;
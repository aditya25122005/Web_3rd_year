const express= require('express');
const Product = require('../models/Product');

const router=express.Router();// mini instance

// to show all the products
router.get('/products',async(req,res)=>{
    // Jo bhejna hai wo database se nikalenge
    let products=await Product.find({});
    res.render('products/index',{products}); // render ke liye kuch bhejna padega
})


// to show the form to add new products
router.get('/product/new',(req,res)=>{
    res.render('products/new');
})


// to actually add the product
router.post('/products',async(req,res)=>{
    let{name,img,price,desc}=req.body;
    await Product.create({name,img,price,desc}) // add in database
    res.redirect('/products');
})


// to show a particular product
router.get('/products/:id', async(req,res)=>{
    let{id}=req.params;  // get id from the url
    let foundProduct=await Product.findById(id).populate('reviews'); // get id from database
    res.render('products/show',{foundProduct})
})

// form to edit the product

router.get('/products/:id/edit',async(req,res)=>{
    let {id}=req.params;
    let foundProduct=await Product.findById(id);
    res.render('products/edit',{foundProduct});
})


// actually update about a product
router.patch('/products/:id',async(req,res)=>{
    let {id} = req.params;
    let {name,img,price,desc}=req.body;
    await Product.findByIdAndUpdate(id,{name,img,price,desc});
    res.redirect(`/products/${id}`);
})


// to delete a product

router.delete('/product/:id', async(req,res)=>{
    let {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})


module.exports=router;
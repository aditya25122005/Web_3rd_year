const express= require('express');
const Product = require('../models/Product');

const router=express.Router();// mini instance

router.get('/products',async(req,res)=>{
    // Jo bhejna hai wo database se nikalenge
    let products=await Product.find({});
    res.render('products/index',{products}); // render ke liye kuch nhejna padega
})


module.exports=router;
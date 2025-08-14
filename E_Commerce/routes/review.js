const express= require('express');
const Product = require('../models/Product');
const Review= require('../models/review');
const router=express.Router();// mini instance


router.post('/products/:id/review',async(req,res)=>{
    let {id}= req.params;
    let {rating, comment}=req.body;
    const product=await Product.findById(id); // we found the product 
    // make a new review
    // const review = new Revieweview({rating,comment});
    const review= new Review({rating,comment});
    product.reviews.push(review);
    await review.save();   // save changes in DB(made new review)
    await product.save();  // save in DB(change in reviews array)

    res.redirect(`/products/${id}`);
})

module.exports=router;
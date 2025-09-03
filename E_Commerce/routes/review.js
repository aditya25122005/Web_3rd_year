const express= require('express');
const Product = require('../models/Product');
const Review= require('../models/review');
const router=express.Router();// mini instance
const {validateReview, isLoggedIn}= require('../middleware');



router.post('/products/:id/review',validateReview,async(req,res)=>{
    try{
    let {id}= req.params;
    let {rating, comment}=req.body;
    comment = comment && comment.trim() !== "" ? comment.trim() : null;
    const product=await Product.findById(id); // we found the product 
    // make a new review
    // const review = new Revieweview({rating,comment});
    const review= new Review({rating,comment});
    product.reviews.push(review);
    await review.save();   // save changes in DB(made new review)
    await product.save();  // save in DB(change in reviews array)

    req.flash('success',"Review added successfully");
    res.redirect(`/products/${id}`);
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})
// to delete a review


router.delete('/products/:productId/review/:reviewId', isLoggedIn, async (req, res) => {
    try {
        const { productId, reviewId } = req.params;

        // Remove the review reference from the product
        await Product.findByIdAndUpdate(productId, {
            $pull: { reviews: reviewId }
        });

        // Delete the review document itself
        await Review.findByIdAndDelete(reviewId);

        req.flash('success', 'Review deleted successfully');
        res.redirect(`/products/${productId}`);
    } catch (e) {
        console.log(e);
        res.status(500).render('error', { err: e.message });
    }
});

module.exports=router;
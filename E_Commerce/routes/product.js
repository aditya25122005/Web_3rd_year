const express= require('express');
const Product = require('../models/Product');
const Review = require('../models/review');


const router=express.Router();// mini instance
const {validateProduct, isProductAuthor}=require('../middleware');
const {validateReview,isLoggedIn,isSeller}= require('../middleware');
const User = require('../models/User');

// to show all the products
router.get('/products',isLoggedIn,async(req,res)=>{
    // Jo bhejna hai wo database se nikalenge
    try{
    let products=await Product.find({}).populate('reviews').populate('author');
    let user=null;
    if(req.user){
        user=await User.findById(req.user._id).populate('wishlist')
    }
    res.render('products/index',{products,currentuser:user}); // render ke liye kuch bhejna padega
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }

})


// to show the form to add new products
router.get('/product/new',isLoggedIn,(req,res)=>{
    try{
    res.render('products/new');
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})


// to actually add the product
router.post('/products',validateProduct,isLoggedIn,isSeller,async(req,res)=>{
    try{
    let{name,img,price,desc}=req.body;
    await Product.create({name,img,price,desc,author:req.user._id}) // add in database
    req.flash('success','Product added successfully')
    res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})


// to show a particular product
router.get('/products/:id',isLoggedIn, async(req,res)=>{
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

router.get('/products/:id/edit',isLoggedIn,async(req,res)=>{
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
router.patch('/products/:id',validateProduct,isLoggedIn,async(req,res)=>{
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

router.delete('/product/:id',isLoggedIn, isSeller,isProductAuthor,async(req,res)=>{
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



// Route to handle product liking/unliking
router.post('/products/:id/like', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(req.user._id);
        const isLiked = user.wishlist.includes(id);

        if (isLiked) {
            // Remove the product from the user's wishlist
            user.wishlist = user.wishlist.filter(item => item.toString() !== id);
        } else {
            // Add the product to the user's wishlist
            user.wishlist.push(id);
        }

        await user.save();
        res.status(200).json({ isLiked: !isLiked });

    } catch (e) {
        // Handle potential errors (e.g., user not found)
        res.status(500).json({ error: e.message });
    }
});

module.exports=router;
const Product = require('./models/Product');
const {productSchema,reviewSchema}=require('./schema');


const validateProduct=(req,res,next)=>{
    let {name,img,price,desc}=req.body;
    const{error}=productSchema.validate({name,img,price,desc})
    if(error){
        return res.render('error');
    }
    next();
}


const validateReview = (req,res,next) => {
    let {rating,comment} = req.body;
    const {error} = reviewSchema.validate({rating, comment}); // ✅ use reviewSchema
    if(error){
        return res.render('error');
    }
    next();
}

const isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated() || !req.user){
        req.flash('error','Please Login First');
        return res.redirect('/login');
    }
    next();

}

const isSeller=(req,res,next)=>{
    if(!req.user){
        req.flash('error',"You don't have access");
        return res.redirect('/login');
    }
    if(req.user.role !=='seller'){
        req.flash('error',"You don't have access");
        return res.redirect('/products');
    }
    next();
}

const isProductAuthor=async(req,res,next)=>{
    const {id} = req.params;
    const product= await Product.findById(id);
    if(!product){
        req.flash('error',"product not found");
        return res.redirect('/products');
    }
    if(!product.author.equals(req.user._id)){
        req.flash('error',"You dont have permission to do that");
        return res.redirect('/products');
    }
    next();
}
module.exports={isLoggedIn,validateProduct,validateReview,isSeller,isProductAuthor};
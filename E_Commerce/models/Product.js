const mongoose=require('mongoose');
const Review=require('./review')
const productSchema=new mongoose.Schema({

    name: {
        type:String,
        trim:true,
        required:true
    },
    img:  {
        type:String,
        trim:true,
        // default:

    },
    price: {
        type:Number,
        min:0,
        required:true
    },
    desc:{
        type:String,
        trim:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId, // type of review id
            ref:'Review' // which Model
        }
    ],
    autor:{
        type: mongoose.Schema.Types.ObjectId, // type of review id
        ref:'User'
    }

})

// Middleware jo mongoDB operations karwane par use hota hai and iske andar pre and post middleware use hote hai which are basically used over the schema before the model in JS class

productSchema.post('findOneAndDelete',async function(product){
    if(product.reviews.length>0){
        await Review.deleteMany({_id:{$in:product.reviews}})
    }
})


//avg rating
productSchema.virtual('avgRating').get(function () {
    // Check if reviews exist and if it's an array with at least one element
    if (this.reviews && Array.isArray(this.reviews) && this.reviews.length > 0) {
        const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
        return parseFloat((totalRating / this.reviews.length).toFixed(1)); 
    }
    return 0; // Return 0 if there are no reviews or the array is invalid
});
const Product=mongoose.model('Product',productSchema)

module.exports=Product;
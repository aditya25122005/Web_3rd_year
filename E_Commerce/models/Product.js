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
    avgRating:{
        type:Number,
        default:0
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
    ]

})

// Middleware jo mongoDB operations karwane par use hota hai and iske andar pre and post middleware use hote hai which are basically used over the schema before the model in JS class

productSchema.post('findOneAndDelete',async function(product){
    if(product.reviews.length>0){
        await Review.deleteMany({_id:{$in:product.reviews}})
    }
})

const Product=mongoose.model('Product',productSchema)

module.exports=Product;
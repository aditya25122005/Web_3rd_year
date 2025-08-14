const mongoose=require('mongoose');
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
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId, // type of review id
            ref:'Review' // which Model
        }
    ]

})

const Product=mongoose.model('Product',productSchema)

module.exports=Product;
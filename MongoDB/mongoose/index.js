const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nobita')
.then(()=>{
    console.log("DB connected successfully");
    
})
.catch((err)=>{
    console.log("Error while connecting DB");
    console.log(err);
})


// schema (blue-print)

const moviesSchema= new mongoose.Schema({
    name: String,
    rating:Number,
    year:Number,
    isWatched:Boolean

})


// Model (JS Class)  ---> Collection for database
const Movie=mongoose.model('Movie',moviesSchema) // name of model, name of schema

//console.log(Movie);


//Making a new Object
 //new Object     //Model
let ironman= new Movie({  // creates a new object using model
    name:"IronMan",
    rating:8,
    year:2015,
    isWatched:true
})
ironman.save(); // DB ke andar uss object ko store kar dega permanently

console.log(ironman);


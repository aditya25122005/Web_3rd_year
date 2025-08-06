//Require mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test/nobita')
.then(()=>{
console.log("DB connected successfully");

})
.catch((err)=>{
    console.log("Unable to Connect DB");
    console.log(err);
})




const mongoose= require('mongoose');
const Product= require('./models/Product');



const products=[
    {
        name:"Iphone 15pro",
        img:"https://images.unsplash.com/photo-1702289613082-1252ec3eb5d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZSUyMDE1JTIwcHJvfGVufDB8fDB8fHww",
        price:130000,
        desc:"Very Costly"
    
    },{
        name:"Macbook m3",
        img:"https://images.unsplash.com/photo-1659135890084-930731031f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9vayUyMG0yfGVufDB8fDB8fHww",
        price: 250000,
        desc:"Too much costly"

    },{
        name:"ipad pro",
        img:"https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZCUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
        price:70000,
        desc:"for seeing only"  
    },{
        name:"Iwatch",
        img:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEFwcGxlJTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
        price:50000,
        desc:"This is cheapest"

    },{
        name:"Airpods",
        img:"https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D",
        price:25000,
        desc:"Good to buy"
    }
]
async function seedDB(){
    await Product.insertMany(products);
    console.log("Data Seeded successfully");
    
}

module.exports=seedDB;
// .insertmany gives a promise --> To avoid chaining we use async await
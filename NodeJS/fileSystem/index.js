let fs=require('fs')
// console.log(fs);   // will give an object

// const path= require('path');
// console.log(path.join('sam','vohra','abc'));



// CRUD  create read update delete



// create or  write

let data="aditya" 
// Takes 4 arguments filename, data, object, cb func.

// fs.writeFile('neww.txt',data,{
//     encoding:'utf-8',  // These are optional flags
//     flag:'w'

// },
// (err)=>{
//     if(err) throw err;
//     console.log("file written successfully");   // Just acknowledging messages
    
// })

// fs.writeFile('abcd.txt',"jai ho",{},(err)=>{
// if(err) throw err;
// console.log("file written successfully");

// })
// let data2="This is my data2"


// let fs=require('fs')

// fs.writeFileSync('abc.txt',data2)





// const fs=require('fs')
// // READ

// fs.readFile('abc.txt', {
//      //encoding:"utf-8",    // <Buffer 54 68 69 73 20 69 73 20 6d 79 20 64 61 74 61 32> ----> If we dont use encoding
//     flag:'r'

// },(err,data)=>{
//     if(err) throw err
//     console.log(data.toString());   // If we dont use utf-8  we can convert data.toString() then can see it
    
// })







// Update

// fs.appendFile('abc.txt','Mai nahi bataunga',(err)=>{
//     if(err){
//     throw err;
//     }
//     console.log("Data Edited Successfully");
    
// })


// Delete

// fs.unlink('abc.txt',(err)=>{
//  if(err){
//     throw err

//  }
//  console.log("File Deleted Successfully");
 
// })
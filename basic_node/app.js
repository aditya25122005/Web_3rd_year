// console.log(process.argv);
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\Web_3rd_year\\basic_node\\app.js'
// ]



// console.log("Welcome");

// console.log(process.argv.pop());

// let count=process.argv.pop();
// console.log(count);


let neww=process.argv.slice(2);
console.log(neww);
for(let i=1;i<=neww[1];i++){
    console.log(neww[0]);
    
}


// div by 3--> fizz
// div by 5-->buzz
// both --> fizzbuzz

// let i=20;
// for(let num=1;num<=i;num++){
//     if(num%3==0 && num%5==0){
//         console.log("FizzBuzz");
        
//     }
//     else if(num%3==0){
//         console.log("Fizz");
        
//     }
//     else if(num%5==0){
//         console.log("Buzz");
        
//     }
//     else{
//         console.log(num);
        
//     }
// }





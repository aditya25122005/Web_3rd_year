//file 2


let math=require('./index.js')  
// console.log(math);

/* output
3.141592653589793
 [Function: ans1]
 [Function: ans2]
 {}  

*/




//destructure

let {pie,ans1,ans2}=require('./index.js');
console.log(pie);
console.log(ans1(4));
console.log(ans2(4,5));




// console.log(typeof math);
// console.log(math.ans1(20));
// console.log(math.ans2(4,5));
// console.log(math.pi);





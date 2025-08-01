//file 1
let pi=Math.PI;
console.log(pi);


let ans1 = num=>num*num
let ans2=(a,b)=> a+b;

console.log(ans1);
console.log(ans2);

// module.exports={} // bydefault


// module.exports={pi,ans1,ans2}
// why not this be a key Value pair


// module.exports={
//     pi:pi,  //--->pi
//     ans1:ans1,  // ---ans1
//     ans2,ans2   // ---ans2
// }
// when key value pair are same then we can write one only




// module.exports={
//     pie:pi,  //--->pi
//     ans1:ans1,  // ---ans1
//     ans2,ans2   // ---ans2
// }

module.exports="sitaram"  // exported a string
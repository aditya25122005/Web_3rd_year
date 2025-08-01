let arr=process.argv
console.log(arr);

let neww=arr.slice(2)
console.log(neww);  //[ '10', '20', '30' ]

let a=parseInt(neww[0])
let b=parseInt(neww[1])
let c=parseInt(neww[2])

console.log(a+b+c);   //60

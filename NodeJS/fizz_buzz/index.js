// let n=process.argv.pop();

// let count3=1;
// let count5=1;
// let str="";
// for(let i=1;i<=n;i++){
//  str="";
    
//     if(count3===3){
//         str+="Fizz"
//         count3=0;
//     }
//     if(count5===5){
//         str+="Buzz";
//         count5=0;
//     }
//     if(str===""){
//         str+=i;
//     }
//     count3++;
//     count5++;
//     console.log(str);
    

// }




//Approach 1  *****************************************************


// for(let i=1;i<=20;i++){
//     let str="";
//     if(i%3===0){
//         str+="Fizz";
//     }
//     if(i%5===0){
//         str+="Buzz";
//     }
//     if(str===""){
//         str+=i;
//     }
//     console.log(str);
    
// }



// Approach 2 **************************************************



let N=process.argv.pop();
let c3=1
let c5=1;
for(let i=1;i<=N;i++){
    let str="";
    if(c3==3){
        str+='fizz'
        c3=0;
    }
    if(c5==5){
        str+='Buzz'
        c5=0;
    }
    if(str==""){
        str+=i;

    }
    console.log(str);
    c3++;
    c5++;
    
}


Flatten an array

const arr= [1,[2,[3,4]],5]

function flatten(arr){
    return arr.reduce((acc,val)=>{
       return acc.concat(Array.isArray(val)? flatten(val):val); 
    },[])
}

console.log(flatten(arr));

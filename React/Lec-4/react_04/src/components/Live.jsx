import { useEffect, useState } from "react";

function Live()
{
    const [count, setCount]= useState(0);
    useEffect(()=>{
        if(count===0){
            console.log("Component Did Mount");       
        }
        if(count>0 && count<5){
            console.log("Component Did Update");           
        }
        if(count==5){
            return ()=>console.log("Component Will Unmount");
        }

    },[count])

    return(
        <button onClick={()=>setCount(count+1)}>Click -{count} </button>
    )
}
export default Live;
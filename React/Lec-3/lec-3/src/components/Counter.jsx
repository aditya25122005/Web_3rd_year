import { useState } from "react";

function Counter(){
    let [count ,setCount]=useState(0);
    function handleDec(){
        setCount(count-1);
    }
    function handleInc(){    
        setCount((cnt)=>cnt+1);
        setCount((cnt)=>cnt+1);
        setCount((cnt)=>cnt+1);   
    }
    return(
        <div>
            <button onClick={handleInc}>INC</button> 
            <h1>Count: {count}</h1>
            <button onClick={handleDec}>DEC</button>

        </div>
    )
}

export default Counter;
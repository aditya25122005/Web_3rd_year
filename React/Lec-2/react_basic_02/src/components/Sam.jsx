   let a=10;
    let b="sam";
    let c=true;
    let d=false;
    let e=null;
    let f=undefined;
    function handleKids(){
        console.log("GRWM");
    }
    function kush(...rest){
        console.log(rest);
    }
        return(
        <div>
            <h1>a</h1>
            <h1>{a}</h1>
            <h1>JSON.stringify(c)</h1>
            <h1>JSON.stringify(d)</h1>
            <h1>JSON.stringify(e)</h1>
            <h1>JSON.stringify(f)</h1>
            <button onClick={handleKids} >Btn 1</button>
            <button onClick={()=>kush(10, 20, 30)} >Btn 2</button>  
             {/* callback function->isiliye kush ko call krna pdega */}
        </div>
    )

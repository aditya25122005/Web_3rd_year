import { useState } from "react";

// function Mogambo(props){
function Mogambo({naam}){
    let [name, setName]=useState(naam);
    
    function handleNaam(){
        //Synchronous
        console.log(name, "Before"); 
        
         // Asynchronous
        setName("Anonymous"); // Mogambo function will again execute 

        // name ki value change nhi hui thi -> thats why old value of name here
        console.log(name,"After");
        
    }

    return(
        <div>
            <button onClick={handleNaam}>Naam Badal Dunga- {name}</button>
        </div>
    )
}

export default Mogambo;


// // function Mogambo(props){
// function Mogambo({naam}){
//     let myName=naam;
//     function handleNaam(){
//         console.log(myName,"Before");
//         myName="Anonymous"
//         console.log(myName,"After")
//     }

//     return(
//         <div>
//             <button onClick={handleNaam}>Naam Badal Dunga- {myName}</button>
//         </div>
//     )
// }

// export default Mogambo;
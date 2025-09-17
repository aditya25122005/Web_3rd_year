// import { useEffect, useState } from "react";
// import axios from "axios"
// function Api()
// {
//     const [data, setData]=useState([]);
//     const API='https://jsonplaceholder.typicode.com/todos/1';

//     useEffect(()=>{
//             fetch(API)
//     .then((data)=>{
//         return data.json();
//     })
//     .then((res)=>{
//         // console.log(res);
//         setData(res);
//     })
//     .catch((err)=>{
//         console.log("ERR",err)
//     })
//     }, [])
//     // }, [data])
//     const call=new axios{
//         method:"post",
//         url:"https://jsonplaceholder.typicode.com/todos/1",
//     }
//     return (
//         <div>
//             <h1>Api</h1>
//             {
//                 data.map((item, index)=>{
//                     return (
//                         <h1>Title:{item.title}</h1>
//                     )
//                 })
//             }
//         </div>
//     )
// }
// export default Api;

import { useEffect, useState } from "react";
import axios from "axios"
function Api()
{
    const [data, setData]=useState([]);
    const API='https://jsonplaceholder.typicode.com/todos/1';

    useEffect(()=>{
        axios.get(API)
        .then((data)=>{
            // console.log(data,"data");
            setData(data.data);      
        })
        .catch((err)=>{
            console.log(err,"err");       
        })     
    }, [])
    // }, [data])
    return (
        <div>
            <h1>Api</h1>
            {
                data.map((item, index)=>{
                    return (
                        <h1>Title:{item.title}</h1>
                    )
                })
            }
        </div>
    )
}




export default Api;
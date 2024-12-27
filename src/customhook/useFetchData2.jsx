// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";


// function useFetchData2(url){
//     const [data,setData]=useState(null);
//     const [loading,setloading]=useState(true);
//     const [error,setError]=useState(null);

//     useEffect(()=>{
//         const fetchData=async()=>{
//             try{
//                const res=await fetch(url);
//                if(!res.ok){
//                 throw new Error('network Error: ');
//                }
//                const result=await res.json();
//                setData(result);
//             }
//             catch(e){
//                 setError(e.message)
//             }
//             finally{
//                setloading(false)
//             }

//         }
//         fetchData()
//     },[url])
//     return {data,loading,error}
// }

// export default useFetchData2;

function useFetchData2(url){
    const [data,setData]=useState(null);
    const [loading,setloading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                let res=await fetch(url);
                if(!res.ok){
                    throw new Error('network error : ');
                }
                let result=await res.json();
                setData(result);
            }
            catch(e){
                setError(e.message)

            }
            finally{
                setloading(false);
            }
        }
        fetchData();
    },[url])

    return{data,loading,error}
}

export default useFetchData2;
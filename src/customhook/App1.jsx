// import React from 'react'
// import useFetchData2 from './useFetchData2';
// // import useCounter from './useCounter'

// const App1 = () => {
//    let {data,loading,error}=useFetchData2('https://jsonplaceholder.typicode.com/todos/1')
//    console.log(data,loading,error)
    
    
//   return (
//     <div>{loading}</div>
  
//   )
// }

// export default App1;

import React from 'react'
import useFetchData2 from './useFetchData2'

const App1 = () => {
  let {data,loading,error}=useFetchData2('https://jsonplaceholder.typicode.com/todos/50')
  console.log(data,loading,error)
  return (
    <div>{loading}</div>
  )
}

export default App1
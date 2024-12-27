
import './App.css';
import React, { createContext } from 'react';
import TodoList from './practicereact/TodoList';
import TodoListFull from './practicereact/TodoListFull';
import TodoListPra from './practicereact/TodoListPra';
import Useeffect from './practicereact/Useeffect';
import Usereducer from './practicereact/Usereducer';
import ChildA from './practicereact/ChildA';
import ChildB from './practicereact/ChildB';
import ChildC from './practicereact/ChildC';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './practicereact/Home';
import About from './practicereact/About';
import Contact from './practicereact/Contact';
import Navigation from './practicereact/Navigation';
import User from './practicereact/User';
import Login from './practicereact/Login';
import Protected from './practicereact/Protected';

import { Router } from 'react-router-dom';
// import LoginPage from './practicereact/LoginPage';
import { increment } from './redux/CounterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom';
import StoreProduct from './practoolkit/StoreProduct';
import store from './reduxx/store';
// import LoginPage from './reduxx/LoginPage';
// import { authReducer } from './reduxx/authReducer';




// import rootReducer from './reduxx/rootReducer';



// const data=createContext();
// const data1=createContext();
// const data2=createContext();
// function App() {
// // const name="arman malik";
// // const gender="male";
// // const age=20;
// // const router=createBrowserRouter([
// //   {
// //     path:"/",
// //     element:<><Navigation/><Protected Component={Home}/></>
// //   },
// //   {
// //     path:"/about",
// //     element:<><Navigation/><Protected Component={About}/></>
// //   },
// //   {
// //     path:"/contact",
// //     element:<><Navigation/><Contact/></>
// //   },
// //   {
// //     path:"/user/:username",
// //     element:<><Navigation/><User/></>
// //   },
// //   {
// //     path:"/login",
// //     element:<><Navigation/><Login/></>
// //   },
// // ])
// //   const count= useSelector((state)=>state.counter.value);
// //   const dispatch=useDispatch();
// // const increment=()=>{
// //   dispatch(increment())
// // }
// // const decrement=()=>{
// //   dispatch(decrement())
// // }
//   return (
//     // <div className='App'>
//   {/* <TodoList/> */}
//   {/* <TodoListFull/> */}
//   {/* <TodoListPra/> */}
//   {/* <Useeffect/> */}
//   {/* <Usereducer/> */}
// {/* <data.Provider value={name}>
//   <data1.Provider value={gender}>
//     <data2.Provider value={age}>
//   <ChildA/>
//   </data2.Provider>
//   </data1.Provider>
// </data.Provider> */}
// {/* <RouterProvider router={router}/> */}

    
      
    
//     {/* <button onClick={increment}>increment</button>
//     <button onClick={decrement}>decrement</button>
//     <h1>{count}</h1> */}


//     // </div>

   
//       <Provider store={store}>
      
//           <StoreProduct/>
      
//       </Provider>
//   );

// }


// const App3 = () => {
//   return (
//     <Provider store={store}>
    
//         <LoginPage/>
    
//     </Provider>
//   )
// }

// export default App3;


// export {data,data1,data2}

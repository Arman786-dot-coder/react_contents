import { createSlice } from "@reduxjs/toolkit"


const initialState={
    products:[]
   } 

const productSlicer=createSlice({
    name:'products',
    initialState,
    setProducts:(state,action)=>{
        state.products=action.payload;
    },
    addProducts:(state,action)=>{
        state.products.push(action.payload);
    },
})


export default productSlicer.reducer;
export const {setProducts,addProducts}=productSlicer.actions;


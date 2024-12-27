import { createSlice } from "@reduxjs/toolkit";
const initialState={
    products:[]
}



const ProductSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        SetProducts:(state,action)=>{
            state.products=action.payload;
        },
        addProducts:(state,action)=>{
            state.products.push(action.payload)
        }
    }
}) 

export default ProductSlice.reducer;
export const {SetProducts,addProducts}=ProductSlice.actions;
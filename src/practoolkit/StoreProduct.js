import React from 'react'
import { addProducts } from './ProductSlice'
import { useDispatch, useSelector } from 'react-redux'


const StoreProduct = () => {
    const products=useSelector((state)=>state.products.products);
    const dispatch=useDispatch();

  return (
    <div>
        <button onClick={()=>dispatch(addProducts({id:10, name:'lamberginny'}))}> add to cart</button>

        {products && products.length>0 ? products.map(product=>{return (<><h1>{product.name}</h1></>)}):<><h1>cart is empty</h1></>}


        
    </div>
  )
}

export default StoreProduct;


import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from './ProductSlicer';

const StoreProducts = () => {
    const dispatch=useDispatch();
    const Products=useSelector((state)=>state.products.products);
    
  return (
    <div>
        <button onClick={()=>dispatch(addProducts({id:10, name:'toy'}))}>add to cart</button>
        {Products && Products.length>0?Products.map(Product=>{return(<><h1>{Product.name}</h1></>)}):<h1>cart empty</h1>}
    </div>
  )
}

export default StoreProducts;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from './productSlicer';

const StoreProducts = () => {
    const dispatch=useDispatch();
    const products=useSelector((state)=>state.products.products)

  return (
    <div>
<button onClick={()=>dispatch(addProducts({id:10, name:'toy'}))}>Add to Cart</button>
{products  && products.length >0 ? products.map(product =>{return(<><h1>{product.name}</h1></>)}): <><h1>cart empty</h1></> }
    </div>
  )
}

export default StoreProducts
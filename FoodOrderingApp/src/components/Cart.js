import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice';

export default function Cart() {

const cartItems=useSelector((store)=>store.cart.items)

const dispatch=useDispatch();

const handleClearCart=()=>{
  dispatch(clearCart())
}
  
return (
    <div className='text-center m-5 p-5'>
      <h1 className='text-xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
      <button className="m-2 p-2 bg-black text-white" onClick={handleClearCart}>Clear Cart</button>
      <ItemList items={cartItems}/>
      </div>
    </div>

  )
}

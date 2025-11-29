import React, { useState } from 'react'
import Header from './Header'
import { BG_URL } from '../utils/constants'

const Login = () => {

const [isSigInForm,setIsSignInForm]=useState(true)

const toggleSignInForm=()=>{
   setIsSignInForm(!isSigInForm)
}
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={BG_URL} alt='bg-img'/>
        </div>
        <form className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
             <h1 className='font-bold text-3xl py-4'>{isSigInForm?"Sign In":"Sign Up"}</h1>
               {!isSigInForm&&<input type="text" placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700'/>}
             <input type="text" placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700'/>
             <input type="password" placeholder='password' className='p-2 my-2 w-full bg-gray-700'/>
             <button className='p-2 my-2 bg-red-700 w-full rounded-lg'>{isSigInForm?"Sign In":"Sign Up"}</button>
             <p className='py-2 cursor-pointer' onClick={toggleSignInForm}>{isSigInForm?"New to Netflix?Sign up now.":"Alreday Registered Sign In now"}</p>
        </form>
    </div>
  )
}

export default Login
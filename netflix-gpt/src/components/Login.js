import React, { useRef, useState } from 'react'
import Header from './Header'
import { BG_URL } from '../utils/constants'
import { checkValidData } from '../utils/validate'

const Login = () => {

const [isSigInForm,setIsSignInForm]=useState(true)
const [errorMessage,setErrorMessage]=useState(null)

const email=useRef(null)
const password=useRef(null)
const name=useRef


const toggleSignInForm=()=>{
  
   setIsSignInForm(!isSigInForm)
}

const handleValidation=()=>{
     const message=checkValidData(email.current.value,password.current.value)
     setErrorMessage(message)


   
}
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={BG_URL} alt='bg-img'/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
             <h1 className='font-bold text-3xl py-4'>{isSigInForm?"Sign In":"Sign Up"}</h1>
             {!isSigInForm&&<input ref={name} type="text" placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700'/>}
             <input type="text" ref={email} placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700'/>
             <input type="password" ref={password} placeholder='password' className='p-2 my-2 w-full bg-gray-700'/>
             <p className='text-red-500 '>{errorMessage}</p>
             <button className='p-2 my-2 bg-red-700 w-full rounded-lg' onClick={handleValidation}>{isSigInForm?"Sign In":"Sign Up"}</button>
             <p className='py-2 cursor-pointer' onClick={toggleSignInForm}>{isSigInForm?"New to Netflix?Sign up now.":"Alreday Registered Sign In now"}</p>
        </form>
    </div>
  )
}

export default Login
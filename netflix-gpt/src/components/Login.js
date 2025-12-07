import React, { useRef, useState } from 'react'
import Header from './Header'
import { BG_URL } from '../utils/constants'
import { checkValidData } from '../utils/validate'
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch();

const [isSigInForm,setIsSignInForm]=useState(true)
const [errorMessage,setErrorMessage]=useState(null)

const email=useRef(null)
const password=useRef(null)
const name=useRef(null)


const toggleSignInForm=()=>{
   setIsSignInForm(!isSigInForm)
}

const handleValidation=()=>{
     const message=checkValidData(email.current.value,password.current.value)
     setErrorMessage(message)
     if(message) return;
        
     if(!isSigInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
       .then((userCredential) => {
            // Signed up 
           const user = userCredential.user;
           console.log(user)
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
          }).then(() => {
            const {uid,email,displayName,photoURL }= auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
             navigate('/browse')
           }).catch((error) => {
          });   
       })
       .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           console.log(errorCode,errorMessage)
           setErrorMessage(errorMessage)
        });

     }else{
        //Sign In Logic

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
           const user = userCredential.user;
           console.log(user)
     
          navigate('/browse') 
       })
        .catch((error) => {
         const errorCode = error.code;
         console.log(errorCode)
         const errorMessage = error.message;
         setErrorMessage(errorMessage)
         navigate('/')
  });


     }

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
import React from 'react'
import { LOGO,USER_AVATAR } from '../utils/constants'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {debugger

  const navigate=useNavigate()
   const user = useSelector((store) => store.user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
       navigate('/')
     }).catch((error) => {
      // An error happened.
});

  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <img className='w-44' src={LOGO} alt="home-url"/>
        {user&&<div className='flex p-2'>
          <img src={user?.photoURL} alt="avatar" className='w-10 h-10'/>
          <button onClick={handleSignOut} className="text-white font-bold">Sign Out</button>
        </div>}
    </div>
  )
}

export default Header
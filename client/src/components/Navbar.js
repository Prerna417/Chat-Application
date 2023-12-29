import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className='flex items-center h-10 p-4 bg-slate-900 text-white'>
      <span className='font-bold'>Conversalink</span>
      <div className='ml-auto flex gap-3 items-center'>
        <img className='bg-gray-200 rounded-full h-6 w-6 object-cover' src={currentUser.photoURL}></img>
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)} className='bg-white text-black text-xs p-1 rounded-lg'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar

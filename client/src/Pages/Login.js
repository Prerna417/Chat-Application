import React from 'react'
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


const Login = () => {
  const [err,setErr] = useState(false);
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const email = e.target[0].value;
    const password = e.target[1].value;

  
    try {
       const res = await signInWithEmailAndPassword(auth, email, password)
       console.log(res);
      navigate("/");
    } catch (err) {
      console.error(err);
      setErr(true);
    }
  };
  return (
    <div className='container bg-purple-300 h-[100vh] flex items-center justify-center'>
      <div className='bg-white px-12 py-4 rounded-xl flex flex-col gap-2 items-center'>
        <span className='text-pink-400 font-bold text-2xl'>Conversalink</span>
        <span className='text-slate-400 text-lg'>Login</span>
        <form className='flex flex-col space-y-5' onSubmit={handleSubmit}>
            <input type='email' className='p-2 border-b-2 border-b-purple-200' placeholder='enter email'></input>
            <input type='password' className='p-2 border-b-2 border-b-purple-200' placeholder='enter password'></input>
            <button className='bg-purple-300 text-white p-4 font-semibold text-lg'>Signin</button>
            {err && <span>Something went wrong</span>}

        </form>
        <p className='text-pink-400 text-md mt-4'>Don't have an account? <Link to="/register">Signup</Link></p>
      </div>
    </div>
  )
}

export default Login

import React from 'react'

const Login = () => {
  return (
    <div className='container bg-purple-300 h-[100vh] flex items-center justify-center'>
      <div className='bg-white px-12 py-4 rounded-xl flex flex-col gap-2 items-center'>
        <span className='text-pink-400 font-bold text-2xl'>Conversalink</span>
        <span className='text-slate-400 text-lg'>Login</span>
        <form className='flex flex-col space-y-5'>
            <input type='email' className='p-2 border-b-2 border-b-purple-200' placeholder='enter email'></input>
            <input type='password' className='p-2 border-b-2 border-b-purple-200' placeholder='enter password'></input>
            <button className='bg-purple-300 text-white p-4 font-semibold text-lg'>Signin</button>
        </form>
        <p className='text-pink-400 text-md mt-4'>Don't have an account? Signup</p>
      </div>
    </div>
  )
}

export default Login

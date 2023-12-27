import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <div className='bg-purple-900 h-[100vh] flex flex-row justify-center items-center '>
      <div className='flex  border-2 rounded-lg w-[65%] h-[80%] overflow-hidden'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import Navbar from "./Navbar";
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = () => {
  return (
    <div className='flex-grow w-1/3 border-r-2 border-r-slate-700 bg-slate-800 '>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar

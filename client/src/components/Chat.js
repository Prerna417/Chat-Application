import React from 'react'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const Chat = () => {
  return (
    <div className='flex-grow w-2/3 '>
      <div className='text-gray-200 flex p-5 items-center bg-slate-800'>
        <span>Taylor</span>
        <div className='ml-auto space-x-2 '>
        <VideoCameraBackIcon />
        <AddIcCallIcon />
        <MoreHorizIcon />
        </div> 
      </div>
    </div>
  )
}

export default Chat

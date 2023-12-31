import React, { useContext } from 'react'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Messages from './Messages';
import Input from "./Input";
import { ChatContext } from '../context/ChatContext';


const Chat = () => {
  const {data} = useContext(ChatContext);
  return (
    <div className='flex-grow w-2/3 '>
      <div className='text-gray-200 flex p-[10px] items-center h-[50px] bg-slate-800'>
        <span>{data.user?.displayName}</span>
        <div className='ml-auto space-x-2 '>
        <VideoCameraBackIcon />
        <AddIcCallIcon />
        <MoreHorizIcon />
        </div> 
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat

import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({message, isOwner }) => {

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const ref  =useRef();

  useEffect(() =>{
    ref.current?.scrollIntoView({behavior:"smooth"})
  },[message])

  return (
    // message
    <div ref={ref} className={`message ${message.senderId === currentUser.uid && isOwner} flex gap-4 mb-[20px] ${isOwner ? 'flex-row-reverse' : ''}`}>
      {/* messageinfo */}
      <div className=''>
        <img src= {message.senderId === currentUser.uid ? currentUser.photoURL:data.user.photoURL} className='h-[40px] w-[40px] rounded-full object-cover'></img>
        <span className='text-xs'>just now</span>
        </div>
        {/* message content */}
        <div className='max-w-[80%] flex flex-col gap-[10px]'>
          <p className={`py-[10px] px-[20px]  ${isOwner ? 'bg-blue-500 text-white rounded-r-lg' : 'bg-white rounded-l-lg'}`}>{message.text}</p>
          {message.img && <img src='message.img' alt="">
          </img>}
        </div>
    </div>
  )
}

export default Message

import React from 'react'

const Message = ({ isOwner }) => {
  return (
    // message
    <div className={`flex gap-4 mb-[20px] ${isOwner ? 'flex-row-reverse' : ''}`}>
      {/* messageinfo */}
      <div className=''>
        <img src='https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg' className='h-[40px] w-[40px] rounded-full object-cover'></img>
        <span>just now</span>
        </div>
        {/* message content */}
        <div className='max-w-[80%] flex flex-col gap-[10px]'>
          <p className={`py-[10px] px-[20px]  ${isOwner ? 'bg-blue-500 text-white rounded-r-lg' : 'bg-white rounded-l-lg'}`}>hello</p>
        </div>
    </div>
  )
}

export default Message

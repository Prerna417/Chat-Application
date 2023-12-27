import React from 'react'
import Message from "./Message";

const Messages = () => {
  return (
    <div className='bg-slate-200 p-[10px] overflow-scroll' style={{height: 'calc(100% - 100px)'}}>
      <Message isOwner={true}/>
      <Message isOwner={true}/>
      <Message isOwner={true}/>
      <Message isOwner={true}/>
      <Message isOwner={true}/>
      <Message isOwner={true}/>
      <Message isOwner={true}/>
    </div>
  )
}

export default Messages

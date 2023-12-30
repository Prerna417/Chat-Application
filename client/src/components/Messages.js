import React, { useContext, useEffect, useState } from 'react'
import Message from "./Message";
import { ChatContext } from '../context/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const {data} = useContext(ChatContext);

  useEffect(() =>{
    const unsub = onSnapshot(doc(db,"chats",data.chatId),(doc) =>{
      doc.exists() && setMessages(doc.data().messages)
    })

    return () =>{
      unsub()
    }
  },[data.chatId])

  console.log(messages)

  return (
    <div className='bg-slate-200 p-[10px] overflow-scroll' style={{height: 'calc(100% - 100px)'}}>
      {
        messages.map((m)=>(
          <Message message={m} key={m.id} isOwner={true}/>
        ))
      }
     

    </div>
  )
}

export default Messages

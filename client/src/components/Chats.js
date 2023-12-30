import { doc, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect, useContext } from 'react'
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Chats = () => {
  const getChats = () => {

  }
  const [chats, setChats] = useState([]);


  const { currentUser } = useContext(AuthContext);
  const {dispatch} = useContext(ChatContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats()
  }, [currentUser.uid]);

  const handleSelect = (u) =>{
    dispatch({type:"CHANGE_USER",payload:u})
  }
  return (
    <div>
      {Object.entries(chats)?.sort((a,b)=>b[1].date-a[1].date).map((chat) => (
        <div key={chat[0]} onClick={() =>handleSelect(chat[1].userInfo)}
        className='mt-3 flex gap-3 hover:bg-slate-900 items-center'>
        <img className='bg-gray-200 rounded-full h-8 w-8 object-cover' src={chat[1].userInfo.photoURL}></img>
        <div>
          <span className='text-white text-md'>{chat[1].userInfo.displayName}</span>
          <p className='text-gray-400'>{chat[1].lastMessage?.text}</p>
        </div>
      </div>
      ))}
      
    </div>
  )
}

export default Chats

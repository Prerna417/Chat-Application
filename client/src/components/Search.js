import React, { useContext, useState } from 'react'
import { collection, query, where,getDoc,getDocs, setDoc,doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const {currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", username));

    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    }catch(err){
      setErr(true);
    }
    
  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  }

  const handleSelect = async (e) =>{
    
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try{
    const res = await getDoc(doc(db, "users", combinedId))
    if(!res.exists()){
      // create a chat in chats collection
      await setDoc(doc(db,"chats",combinedId), {messages:[]})
      // create userchats
      await updateDoc(doc(db,"userChats",currentUser.uid),{
        [combinedId+".userInfo"]:{
          uid: user.uid,
          displayName:user.displayName,
          photoURL:user.photoURL
        },
        [combinedId+".date"]:serverTimestamp()
      });

      await updateDoc(doc(db,"userChats",user.uid),{
        [combinedId+".userInfo"]:{
          uid: currentUser.uid,
          displayName:currentUser.displayName,
          photoURL:currentUser.photoURL
        },
        [combinedId+".date"]:serverTimestamp()
      });
    }
   }catch(err){
    console.log(err);
   }
    // create user chats
  }

  return (
    <div className='border-b-2 border-b-white'>
      <div className='mt-2'>
        <input className='bg-transparent placeholder-white text-white' type='text' placeholder='find a user' onKeyDown={handleKey} onChange={e => setUsername(e.target.value)}></input>
      </div>
      {err && <span>user not found</span>}
      { user && <div onClick={handleSelect} className='mt-3 mb-3 flex gap-3 hover:bg-slate-900'>
        <img className='bg-gray-200 rounded-full h-8 w-8 object-cover' src={user.photoURL}></img>
        <div>
          <span className='text-white font-semibold text-lg'>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search

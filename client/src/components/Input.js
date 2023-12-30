import React, { useContext, useState } from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import SendIcon from '@mui/icons-material/Send';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import {v4 as uuid} from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Input = () => {
  const [text ,setText] = useState("");
  const [img,setImg] = useState(null);

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const handleSend = async() =>{
      if(img){
        const storageRef = ref(storage, uuid());
        // console.log(storageRef);
    
        const uploadTask = uploadBytesResumable(storageRef, img);

        await new Promise((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              // Handle progress events (optional)
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Upload is ${progress}% done`);
            },
            (error) => {
              // Handle unsuccessful uploads
              console.error("Error during file upload:", error);
              // setErr(true);
              reject(error);
            },
            () => {
              // Handle successful uploads on complete
              console.log("File uploaded successfully");
              resolve();
            }
          );
        });
    
        // Get the download URL after the upload is complete
        const downloadURL = await getDownloadURL(storageRef);

        await updateDoc(doc(db,"chats",data.chatId),{
          messages:arrayUnion({
            id: uuid(),
            text,
            senderId:currentUser.uid,
            date:Timestamp.now(),
            img: downloadURL,
          })
        })
        
      }else{
          await updateDoc(doc(db,"chats",data.chatId),{
            messages:arrayUnion({
              id: uuid(),
              text,
              senderId:currentUser.uid,
              date:Timestamp.now(),
            })
          })
      }
      
      await updateDoc(doc(db,"userChats",currentUser.uid),{
        [data.chatId + ".lastMessage"]:{
          text
        },
        [data.chatId+".date"]:serverTimestamp()
      })

      await updateDoc(doc(db,"userChats",data.user.uid),{
        [data.chatId + ".lastMessage"]:{
          text
        },
        [data.chatId+".date"]:serverTimestamp()
      })


      setText("");
      setImg(null);
  }


  return (
    <div className='bg-white h-[50px] flex items-center'>
      <input type='text' placeholder='type something....' className='w-full border-none outline-none ml-2' onChange={e=>setText(e.target.value)} value={text}></input>
      <div className='flex ml-auto '>
        <span className='h-[24px]'><AttachFileIcon /></span>
        <input type='file' className='hidden ' id='file' value={img} onChange={e=>setImg(e.target.files[0])}></input>
        <label htmlFor='file' className='h-[24px]'>
          <ImageIcon />
        </label>
        <button onClick={handleSend} className='ml-3'><SendIcon /></button>
      </div>
    </div>
  )
}

export default Input

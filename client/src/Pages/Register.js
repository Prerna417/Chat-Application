import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage } from '../firebase';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../firebase";
import { useNavigate,Link } from 'react-router-dom';


const Register = () => {
  const [err,setErr] = useState(false);
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
  
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup Response:", res);
  
      const storageRef = ref(storage, displayName);
      console.log(storageRef);
  
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      // Wait for the upload to complete before proceeding
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
            setErr(true);
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
  
      // Continue with the rest of your code
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL
      });
  
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL
      });
  
      await setDoc(doc(db, "userChats", res.user.uid), {});
      navigate("/");
    } catch (err) {
      console.error(err);
      setErr(true);
    }
  };
  

  return (
    <div className='container bg-purple-300 h-[100vh] flex items-center justify-center'>
      <div className='bg-white px-12 py-4 rounded-xl flex flex-col gap-2 items-center'>
        <span className='text-pink-400 font-bold text-2xl'>Conversalink</span>
        <span className='text-slate-400 text-lg'>Register</span>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
            <input type='text' className='p-2 border-b-2 border-b-purple-200' placeholder='enter name'></input>
            <input type='email' className='p-2 border-b-2 border-b-purple-200' placeholder='enter email'></input>
            <input type='password' className='p-2 border-b-2 border-b-purple-200' placeholder='enter password'></input>
            <input className='hidden' type='file' id='file'></input>
            <label className='flex items-center gap-2 text-md' htmlFor='file'>
                <PersonIcon/>
                <span>Add an avatar</span>
            </label>
            <button className='bg-purple-300 text-white p-4 font-semibold text-lg'>SignUp</button>
            {err && <span>Something went wrong</span>}
        </form>
        <p className='text-pink-400 text-md mt-4'>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Register

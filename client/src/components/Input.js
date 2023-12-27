import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import SendIcon from '@mui/icons-material/Send';

const Input = () => {
  return (
    <div className='bg-white h-[50px] flex items-center'>
      <input type='text' placeholder='type something....' className='w-full border-none outline-none ml-2'></input>
      <div className='flex ml-auto '>
        <span className='h-[24px]'><AttachFileIcon /></span>
        <input type='file' className='hidden ' id='file'></input>
        <label htmlFor='file' className='h-[24px]'>
          <ImageIcon />
        </label>
        <button className='ml-3'><SendIcon /></button>
      </div>
    </div>
  )
}

export default Input

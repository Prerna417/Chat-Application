import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center h-10 p-4 bg-slate-900 text-white'>
      <span className='font-bold'>Conversalink</span>
      <div className='ml-auto flex gap-3 items-center'>
        <img className='bg-gray-200 rounded-full h-6 w-6 object-cover' src='https://imgs.search.brave.com/CcIhHLSJV7xqKWuJpKO9S4E1zGeYkRCyDjxmvGe4bdI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjI5/NTUxOTg2L3Bob3Rv/L2JlYXV0aWZ1bC13/b21hbi1pbi10aGUt/Y2l0eS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9elZxZ25W/cFM0R3BSNlJFSDVH/UExSQTVLS3FLM2hf/SHNlSzJJUFhMbEtZ/TT0'></img>
        <span>Prerna</span>
        <button className='bg-white text-black p-1 rounded-lg'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar

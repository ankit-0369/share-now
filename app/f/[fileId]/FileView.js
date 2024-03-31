"use client"
import { FolderDown } from 'lucide-react'
import React, { useState } from 'react'

function FileView({file}) {
  
  const [disable, setDisable]= useState(true)
  const [password, setPassword]= useState("")

  // const HandleChange= (e) => {
  //   setPassword(e.target.value)
  //   console.log(password)
  //   if(file.password === password){
  //     setDisable(!disable)
  //     return;
  //   }else{
  //     return
  //   }

  // }

  const handleUnlock= ()=>{
    if(file.password === password){
      setDisable(false)
      return;
    }else{
      console.log("wrong Password")
      setDisable(true)
      return;
    }
  }

  return (
    <div className='border border-green-400'>
      

      <div className='border border-primary flex flex-col gap-5 p-5  max-w-md'>
        <p className=' text-lg text-gray-600  '>
          {file.userName} shared a file with you
        </p>

        <div>
          <input 
          className=' w-full bg-gray-50 text-xl
          focus:outline-none
          rounded focus:ring active:border-primary p-2'
          type="password" 
          name="password"
           id="pass" 
           placeholder='Enter the Password'
           onChange={(e) => setPassword(e.target.value)}
           />
        </div>

        <button 
        onClick={handleUnlock}
        className='block  rounded bg-primary
        px-12 py-3 text-lg font-medium
         text-white shadow hover:bg-purple-800 transition duration-300 ease-linear 
         focus:outline-none
          focus:ring  sm:w-auto disabled:bg-gray-500 text-center'>
          Unlock File
        </button>

       <button 
        className='block  rounded bg-primary
        px-12 py-3 text-lg font-medium
         text-white shadow hover:bg-purple-800 transition duration-300 ease-linear 
         focus:outline-none
          focus:ring  sm:w-auto disabled:bg-gray-500 text-center'
        type="button" disabled= {disable}>
         {disable ? "Download File" : 
         <a href= {file.fileUrl} target='_BLANK'
         className='flex gap-2 items-center justify-center'
         >Download File <span><FolderDown /></span></a>}
        </button>
      
      <a href="https://source.unsplash.com/random/300×300/?rajasthan, palaces, natural-scenes" target='_BLANK'>
        
      <button className=''>
          Download
        </button>
      </a>

      </div>
     
    </div>
  )
}

export default FileView

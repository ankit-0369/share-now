"use client"
import React, { useState } from 'react'
import AlertMsg from './AlertMsg'
import ProgressBar from './Progressbar'
import Filepreview from './FilePreview'



function UploadForm({handleUpload, progress}) {

    const [file, setFile]= useState()
    const [errorMsg, setErrorMsg]= useState()

    const handleFile= (file) => {

            if( file && file.size > 2000000){
                setErrorMsg("file size is greater than 2MB");
                setFile(null);
                return;
            }
            setErrorMsg(null);
            setFile(file)

    }

  return (
    <div>
      
<div className="flex flex-col gap-2 items-center justify-center w-full">
    <label for="dropzone-file" 
    className="flex flex-col items-center justify-center
     w-full h-64 border-2 border-purple-300 border-dashed
      rounded-lg cursor-pointer bg-blue-100 
       dark:bg-blue-100 hover:bg-gray-100 dark:border-gray-600
        dark:hover:border-purple-500 dark:hover:bg-blue-100">
        <div className="flex flex-col items-center justify-center
         pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-purple-500 dark:text-purple-800"
             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
             fill="none" 
             viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm md:text-2xl text-purple-500 dark:text-purple-800"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 2MB)</p>
        </div>
        <input id="dropzone-file" 
        type="file"
        onChange={(event) => handleFile(event.target.files[0])}
         className="hidden" />

    </label>

    {file && <Filepreview file= {file} removeFile={() => (setFile(null))} />}

   {errorMsg &&  <AlertMsg msg= {errorMsg} />}

   
    

    { progress>=0? <ProgressBar progress={progress} />:<button disabled= {!file} className='px-4 py-2 w-[30%] text-xl rounded-2xl
     bg-primary text-white disabled:bg-gray-500 text-center'
     onClick={() => handleUpload(file)}
     >Upload</button>
     }




 

   
</div> 


  
    </div>
  )
}

export default UploadForm

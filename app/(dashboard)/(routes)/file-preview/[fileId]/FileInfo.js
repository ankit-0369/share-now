"use client"
import { File } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function FileInfo({file}) {

    const [fileType, setFileType]= useState()
    
    useEffect(()=>{
        file&&setFileType(file?.type.split('/')[0]);
        console.log("File is here: ", file)
    }, [file])


   


  return (
    <div>
       
        {fileType ==='image'? <div>

        <Image
        src={file.fileUrl}
        alt='Image'
        height={400}
        width={400}
        className='p-6 border rounded-sm object-cover border-primary'
        />
        <div className='text-[12px] text-gray400'>{file.type}/ {(file.size/1024/1024).toFixed(2)} MB </div>
        </div> : <div className='flex flex-col p-6 justify-start items-center border rounded-sm object-cover border-primary'>
             <File className=' h-12 w-12 md:h-24 md:w-24 text-primary' /> 
             <div className=' text-sm text-gray-400'>{file.type}</div>
             <div>file size</div>
        </div> }
    </div>
  )
}

export default FileInfo

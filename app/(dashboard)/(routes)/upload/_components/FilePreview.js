import { File, X } from 'lucide-react'
import React from 'react'

function FilePreview({file, removeFile}) {
  return (
   <div className='flex w-full items-center gap-2 rounded border 
    p-2 px-6 justify-between'>
     <div className='flex items-center gap-2 w-full justify-between'>
      <File className= ' w-10 h-10 '/>
      <div className='text-left text-gray-500'>
       <h2> {file.name}</h2>
       <h2 className='text-[12px] text-gray400'>{file.type}/ {(file.size/1024/1024).toFixed(2)} MB </h2>
      </div>

      <X className= "text-red-500 cursor-pointer"
      onClick={() => removeFile()}
      />
    </div>
   </div>
  )
}

export default FilePreview

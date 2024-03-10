import { AlertTriangle } from 'lucide-react'
import React from 'react'

function AlertMsg({msg}) {
  return (
    <div className='flex gap-5 mt-2 bg-red-600 text-white
     justify-center items-center p-4 rounded-lg'>

      <AlertTriangle/>
      <div>
        {msg}
      </div>
      
    </div>
  )
}

export default AlertMsg

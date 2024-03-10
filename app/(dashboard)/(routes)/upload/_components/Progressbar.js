import React from 'react'

function Progressbar({progress}) {
  return (
    <div className='w-full h-4 bg-gray-500 mt-4 rounded-full'>
      <div className='bg-primary h-4 rounded-full text-[12px] font-bold
      flex justify-center items-center
      text-white text-center'
      style={{width: `${progress}%`}}
      >
        {Number(progress).toFixed(0)}%
      </div>
    </div>
  )
}

export default Progressbar

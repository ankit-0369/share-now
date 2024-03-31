"use client"
import { UserButton} from '@clerk/nextjs'
import React from 'react'
import UserUploads from './UserUploads'
import { useUser } from '@clerk/nextjs'
function Files() {

  // const { isLoaded , isSignedIn ,user} = useUser()
  const {user} = useUser()
  // console.log(useUser)
  return (
    <div className='w-full flex flex-col gap-5 h-screen p-5
     md:p-10 border-fuchsia-300 border bg-slate-50'>
      
      <div>
        <input
          type='text'
          placeholder='Search your Files with name'
          className='border-gray-200
          w-full bg-gray-50 text-md focus:outline-none rounded focus:ring
           active:border-primary p-2
           pe-12 shadow-md text-gray-600'
        />
      </div>
      
       {
       user &&  <UserUploads/>
       }
    </div>
  )
}

export default Files

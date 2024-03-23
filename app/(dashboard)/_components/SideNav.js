"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { File, Shield, Upload } from 'lucide-react'
import Link from 'next/link'
function SideNav({ show }) {
  const [activeIndex, setActiveIndex] = useState()
  const menu = [
    {
      id: 1,
      name: 'Upload',
      path: '/upload',
      icon: Upload
    },
    {
      id: 2,
      name: 'Files',
      path: '/files',
      icon: File
    },
    {
      id: 3,
      name: 'Upgrade',
      path: '/upgrade',
      icon: Shield
    }

  ]

  return (
    <div className={`shadow-md pt-4 md:pt-0  border-r-2 h-full z-40 md:bg-gray-50 bg-[#1B1B1F] `}>

      <div className='  p-5 w-full'>

        <Link href={'/'}>
        <Image src='/logo.svg'
        alt='logo'
          className='hidden md:block'
          width={45} height={45} />
        </Link>

        <div className=' p-6 flex gap-1 flex-col float-left w-full'>

          {
            menu.map((item, index) => (

              <Link href={item.path} key={item.id}>

                <button 
                key={item.id}
                className={`flex gap-2 p-4
          hover:bg-gray-100 w-full
             text-gray-500   rounded-lg
             ${(activeIndex === index) ?
                    'bg-blue-100 text-primary' : null
                  }
             `

                }
                  onClick={() => setActiveIndex(index)}
                >
                  <item.icon />
                  <h2>{item.name}</h2>
                </button>
              </Link>

            ))
          }

        </div>

      </div>

    </div>
  )
}

export default SideNav

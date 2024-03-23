"use client"

import { UserButton } from '@clerk/nextjs'
import { useState } from 'react'
import { AlignJustify, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


function TopHeader({handleSideBarShow}) {
    const [showSideNav, setshowSideNav]= useState(true)
    return (
        <div>

            <div className=' flex p-5 border-b items-center
     justify-between md:justify-end
     
    '>          
                

                {
                    !showSideNav ? <X 
                    className=' cursor-pointer md:hidden z-50 text-gray-500'
                    onClick={() => {
          
                      setshowSideNav(!showSideNav)
                      handleSideBarShow(showSideNav)
                      console.log(showSideNav)
                    }}
                    /> : 
                    <AlignJustify
                    className=' cursor-pointer md:hidden z-50'
                    onClick={() => {
          
                      setshowSideNav(!showSideNav)
                      handleSideBarShow(showSideNav)
                      console.log(showSideNav)
                    }}
                    />
                }
               
                <Image src='/logo.svg'
                alt='logo'
                    className='md:hidden'
                    width={45}
                    height={45}
                />

                <UserButton />
            </div>
        </div>
    )
}

export default TopHeader

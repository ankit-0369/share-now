"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import React from 'react'
import Dropdown from './Dropdown'
function Header() {

  const { isLoaded , isSignedIn ,user} = useUser()
  return (
    <div>
      <header className="bg-white border-b">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block text-primary" href="/">
          {/* <span className="sr-only">Home</span> */}
          <Image 
          src= './logo.svg' 
          alt='logo'
          height={45}
           width={45}/>
        </a>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="/upload"> Upload </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="/about-us"> About Us </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="/contact-us"> Contact Us </a>
            </li>

           
          </ul>
        </nav>




      <div className='flex items-center gap-4'>

      <div className='block md:hidden'>
          <Dropdown/>
        </div>

       {
          isLoaded&&isSignedIn ? <UserButton/> : <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-primary hover:bg-purple-800 duration-300 transition ease-linear px-5 py-2.5 text-sm font-medium text-white shadow"
            href="/sign-in"
          >
            Log In Now
          </a>

         
        </div>

      </div>
       }
      </div>

      
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Header

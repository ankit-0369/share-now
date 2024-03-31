"use client"
import React from 'react'
import Constant from '../_utils/Constant'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useUser } from '@clerk/nextjs'


function Hero() {
  const isDarkMode= useSelector((theme) => (theme.ui.isDarkMode))
  const {user}= useUser()
  return (
    <div>
     <section className="bg-gray-50 dark:bg-[#1f2937] dark:text-[#f9fafb]">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
       <span className='text-primary'>Upload, Save </span> and  
       <span className='text-primary'> Share </span>
        your files <span className='text-primary'> Secretely.🤫</span>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-gray-500">
        {Constant.desc}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">


      <a
          className="block w-full rounded bg-primary
           px-12 py-3 text-sm font-medium
            text-white shadow hover:bg-purple-800 transition duration-300 ease-linear focus:outline-none
             focus:ring active:bg-blue-700 sm:w-auto"
          href={user ? "/upload" : "/sign-up"}
        >
          {user ? "Upload" : "Get Started"}
        </a>

        <a
          className="block w-full rounded bg-primary
          px-12 py-3 text-sm font-medium
           text-white shadow hover:bg-purple-800 transition duration-300 ease-linear focus:outline-none
            focus:ring active:bg-blue-700 sm:w-auto"
          href= {user ? "/files" : "https://github.com/ankit-0369/share-now"}
        >
          {user ? "Files" : "Learn More"}
        </a>
      </div>
    </div>
  </div>
</section>
   
    </div>
  )
}

export default Hero

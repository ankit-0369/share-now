"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import TopHeader from './_components/TopHeader'

function Layout({ children }) {

  const [showSideNav, setshowSideNav]= useState(false)

  return (

    <div>

      <div className= {` h-full md:flex flex-col w-64 z-50
       fixed inset-y-0 ${showSideNav ? "": "hidden"} 
       `}>
          
          <SideNav/>

      </div>

      <div className=' md:ml-64'
      >
       <div> <TopHeader handleSideBarShow={(showSideBar) => setshowSideNav(showSideBar)} /></div>
        {children}
      </div>
    </div>



  )
}

export default Layout

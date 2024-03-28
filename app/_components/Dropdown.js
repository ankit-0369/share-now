"use client"
import React, { useState } from 'react'

function Dropdown() {

    const [showDropDown, setShowDropDown]= useState(false)
    const handleClick= () => {

        setShowDropDown((prev)=> !prev)
       
    }
    return (
        <div>
            <div className="relative">
                <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
                   <span>Menu</span>

                    <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                        <span className="sr-only">Menu</span>
                        <svg
                        onClick={handleClick}

                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            
            {/* dropdown menu */}

            {showDropDown ? <div
                    className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                    role="menu"
                >
                    <div className="p-2">


                        <a
                            href="/"
                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                        >
                            Home
                        </a>

                        <a
                            href="/upload"
                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                        >
                            Upload
                        </a>

                        <a
                            href="/about-us"
                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                        >
                            About Us
                        </a>



                        <a
                            href="/contact-us"
                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                        >
                            Contact Us
                        </a>

                        

                    </div>
                </div> : null  
                
            }

               
            </div>

        </div>
    )
}

export default Dropdown


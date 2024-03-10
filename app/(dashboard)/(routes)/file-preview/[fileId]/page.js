"use client"
import Image from 'next/image'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import FileInfo from './FileInfo'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'


import app from '../../../../../firebaseConfig'
import { Copy, CopyMinusIcon, Eye, EyeOff, EyeOffIcon } from 'lucide-react'

function FilePreview({ params }) {

    const db = getFirestore(app);
    const [file, setFile] = useState()
    const [showPassword, setShowPassword]= useState(false)
    const [copyState, setCopyState]= useState(false)
   const copyRef= useRef(null)
   const passwordRef= useRef(null)

    useEffect(() => {

        params?.fileId && getFileInfo()

    }, [params])


    const getFileInfo = async () => {


        const fileRef = doc(db, "uploadedFiles", params?.fileId);
        const fileSnap = await getDoc(fileRef);
        if (fileSnap.exists()) {

            setFile(fileSnap.data())
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }

    }

    const handleCopyBtn= useCallback(()=>{

        setCopyState(true)
        copyRef?.current?.select()
        navigator.clipboard.writeText(file.shortUrl)
        console.log("url: ", file.shortUrl);
    }, [file?.shortUrl])

    const handlePassword= async() =>{
        console.log("password", passwordRef.current.value)
        const passRef= doc(db, "uploadedFiles", params.fileId)
        await updateDoc(passRef, {
            password: passwordRef?.current?.value
          });
    }

    return (
        <div className=' p-8 md:p-28 w-full'>


            <section className="relative flex flex-wrap lg:h-screen lg:items-center border rounded">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl"> Share Now </h1>

                        <p className="mt-4 text-gray-500 text-xl">
                            Your <strong className='text-primary'>Secret</strong> File is ready for sharing🤩 Copy the
                            <strong className='text-primary'>Short</strong> link
                            or <strong className='text-primary'>Email</strong> it.
                        </p>
                    </div>

                    <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">shorturl</label>

                            <div className="relative">

                                <div>shortUrl</div>

                                <div className='flex gap-1 items-baseline justify-center'>
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                    value={"https://localhost:3000/" + params?.fileId}
                                    ref={copyRef}
                                />

                               <span className= {`absolute cursor-pointer ${copyState ? 'text-primary': 'text-gray-400'}
                               inset-y-0 end-0 grid place-content-center px-4`}
                               onClick={(e) => handleCopyBtn()}
                               >
                               <Copy/>
                               </span>
                                </div>

            
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">password</label>
                            <div>Enable Password ?</div>
                            <div className='flex gap-1'>

                                <div className="relative">
                                   
                                    <input
                                        type= {showPassword? "text" : "password"}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter password"
                                        ref={passwordRef}
                                    />

                                   
                                    
                                    <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 end-0 grid
                                    cursor-pointer
                                    place-content-center px-4 text-primary"
                                    >

                                    {showPassword ? <EyeOff/> : <Eye/>} 
                                    </span>

                                    
                                </div>

                                <button className='bg-primary text-white px-4 py-0 rounded-md'
                                    onClick={() => handlePassword()}
                                >Save</button>

                            </div>

                        </div>


                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <div>Send file to Email</div>
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>

                            <button type='submit'
                                className='bg-primary text-white m-3  text-xl p-2 px-4
            border rounded
        '> Send Email</button>

                        </div>



                    </form>

                </div>
                <div className="flex justify-center items-center relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 p-2 ">
                    {file ? <FileInfo file={file} /> : null}
                </div>




            </section>


        </div>
    )
}

export default FilePreview

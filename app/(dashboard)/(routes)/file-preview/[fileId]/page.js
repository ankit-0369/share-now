"use client"

import React, { useEffect, useState, useRef, useCallback } from 'react'
import FileInfo from './FileInfo'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import app from '../../../../../firebaseConfig'
import { Copy, Eye, EyeOff } from 'lucide-react'
import GlobalApi from '../../../../_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'


function FilePreview({ params }) {

    const db = getFirestore(app);
    const [file, setFile] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState(false)
    const [copyState, setCopyState] = useState(false)
    const copyRef = useRef(null)
    const passwordRef = useRef(null)
    const { user } = useUser()
    const [receiverEmail, setReceiverEmail] = useState(null)
    const receiverEmailRef = useRef(null)

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

    const handleCopyBtn = useCallback(() => {

        setCopyState(true)
        copyRef?.current?.select()
        navigator.clipboard.writeText(file.shortUrl)
        console.log("url: ", file.shortUrl);
    }, [file?.shortUrl])

    const handlePassword = async (e) => {
        e.preventDefault()
        console.log("password", passwordRef.current.value)
        const passRef = doc(db, "uploadedFiles", params.fileId)
        await updateDoc(passRef, {
            password: passwordRef?.current?.value
        });
    }

    const sendEmail = (e) => {
        e.preventDefault()
        console.log("Send Email Called", receiverEmailRef?.current?.value);

        const data = {
            receiverEmail: receiverEmailRef?.current?.value,
            senderEmail: file?.userEmail,
            userName: file?.userName,
            fileName: file?.name,
            fileType: file?.type,
            fileSize: file?.size,
            shortUrl: file?.shortUrl,
            password: passwordRef?.current?.value || ""
        }
        console.log(data)
        GlobalApi.sendEmail(data).then(response => console.log(response))
    }

    return (
        <div className=' p-8 md:p-28 w-full'>


            <section className="relative flex flex-wrap lg:h-screen lg:items-center border rounded">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl text-primary"> Share Now </h1>

                        <p className="mt-4 text-gray-500 text-lg m-4 text-center">
                            Your <strong className='text-primary'>Secret</strong> file is ready for sharing 🤩 copy the
                            <strong className='text-primary'> Short</strong> link
                            or <strong className='text-primary'>Email</strong> it.
                        </p>
                    </div>

                    <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">

                        {/* shortUrl field */}

                        <div>
                            <label htmlFor="shorturl" className="text-lg text-gray-600 m-2 ">shorturl</label>

                            <div className="relative">


                                <div className='flex gap-1 items-center justify-center m-2'>
                                    <input
                                        type="text"
                                        className="border-gray-200
                                        w-full bg-gray-50 text-md focus:outline-none rounded focus:ring
                                         active:border-primary p-2
                                         pe-12 shadow-sm text-gray-600"
                                        placeholder="short url"
                                        value={file?.shortUrl}
                                        ref={copyRef}
                                        readOnly
                                    />

                                    <span className={`absolute text-center cursor-pointer ${copyState ? 'text-primary' : 'text-gray-400'}
                               inset-y-0 end-0 place-content-center px-4`}
                                        onClick={(e) => handleCopyBtn()}
                                    >
                                        <Copy />
                                    </span>
                                </div>


                            </div>
                        </div>

                        {/* password field */}

                        <div>
                            <label htmlFor="password" className="sr-only">password</label>
                            <div className='flex gap-2'>
                                <input type="checkbox"
                                    name=""
                                    id=""
                                    onChange={() => setPassword(!password)}

                                />
                                <p className='text-gray-700 m-2'>Enable Password ?</p>
                            </div>
                            {
                                password ? <div className='flex gap-1'>

                                    <div className="relative">

                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="  border-gray-200
                                            w-full bg-gray-50 text-lg focus:outline-none rounded focus:ring
                                             active:border-primary p-2
                                             pe-12 shadow-sm text-gray-600"
                                            placeholder="Enter password"
                                            ref={passwordRef}
                                        />



                                        <span
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 end-0 grid
                                cursor-pointer
                                place-content-center px-4 text-primary"
                                        >

                                            {showPassword ? <EyeOff /> : <Eye />}
                                        </span>


                                    </div>

                                    <button
                                        type='text'
                                        className='bg-primary text-white px-4 py-0 rounded-md ml-2'
                                        onClick={(e) => handlePassword(e)}
                                    >Save</button>

                                </div> : null
                            }

                        </div>

                        {/* send Email Field */}

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <div className='text-lg text-gray-600 m-2'>Send file to Email</div>
                                <input
                                    type="email"
                                    className="border-gray-200
                                    w-full bg-gray-50 text-lg focus:outline-none rounded focus:ring
                                     active:border-primary p-2
                                     pe-12 shadow-sm text-gray-600"
                                    placeholder="Enter email"
                                    ref={receiverEmailRef}

                                />

                            </div>

                            <button type='text'
                                className='bg-primary text-white m-3  text-xl p-2 px-4
                        border rounded'
                                onClick={(e) => sendEmail(e)}
                            > Send Email</button>

                        </div>

                    </form>

                </div>
                <div
                    className="flex justify-center items-center relative
                     h-64 w-full sm:h-96 lg:h-full lg:w-1/2 p-2 ">
                    {file ? <FileInfo file={file} /> : <div>no files</div>}
                </div>


            </section>


        </div>
    )
}

export default FilePreview

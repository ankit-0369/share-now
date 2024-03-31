"use client"
import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from '../../../../firebaseConfig'
import { useUser } from '@clerk/nextjs';

function UserUploads() {

    const [allFiles, setAllFiles] = useState([])
    const db = getFirestore(app);
    const { user } = useUser()
    useEffect(() => {

        const getAllFiles = async () => {

            const q = query(collection(db, "uploadedFiles"));
            const querySnapshot = await getDocs(q);
            let arr= []
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data().userEmail);
                if (doc.data().userEmail === user?.primaryEmailAddress.emailAddress) {

                    arr.push(doc.data())
                }
            });

            setAllFiles(arr)

        }

        getAllFiles()
       
    }, [])



    return (
        <div className='border-gray-200
        w-full bg-gray-50 text-md focus:outline-none rounded focus:ring
         active:border-primary p-2
         pe-12 shadow-md text-gray-600 overflow-auto '>

            {/* <div className='grid grid-cols-4 gap-2 border-spacing-1 border
             border-blue-100 shadow justify-center items-center'>
                <div className='font-bold p-1 text-primary text-lg' >File Name</div>
                <div className='font-bold p-1 text-primary text-lg'>Type</div>
                <div className='font-bold p-1 text-primary text-lg'>Size</div>
                <div className='font-bold p-1 text-primary text-lg'>View</div>

              
            </div> */}

            <div className="overflow-x-auto">
                {
                    allFiles ? <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">FileType</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Size</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">View</th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">


                            {
                                allFiles.map((items, index) => {
                                   
                                    return <tr key={index}>
                                        <td className='whitespace-nowrap px-4 py-2 text-gray-700'>{items.name}</td>
                                        <td className='whitespace-nowrap px-4 py-2 text-gray-700'>{items.type}</td>
                                        <td className='whitespace-nowrap px-4 py-2 text-gray-700'>{items.size}</td>
                                        <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                                            <a
                                                href={items.shortUrl}
                                                target='_BLANK'
                                                className='inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700'>
                                                View
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }



                        </tbody>
                    </table> : null
                }
            </div>
        </div>
    )
}

export default UserUploads

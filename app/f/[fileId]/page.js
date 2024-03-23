"use client"
import React, { useEffect, useState } from 'react'
import FileView from './FileView';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import app from '../../../firebaseConfig';
function DownloadFile({params}) {

    const db = getFirestore(app);

    const [file, setFile]= useState()
    

    useEffect(() => {

        getFileInfo()
    },[])

    const getFileInfo = async () => {

        console.log("Params: ", '/f/'+params?.fileId);
        const fileRef = doc(db, "uploadedFiles",params?.fileId);
        const fileSnap = await getDoc(fileRef);
        if (fileSnap.exists()) {
            console.log("FileSnap: ", fileSnap.data())
            setFile(fileSnap.data())
            console.log("fileSNAP: ", file);
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }

    }

    // console.log("parametersL  :::  ", params.fileId);
  return (
    <div className=' bg-gray-50 flex justify-center items-center
     h-screen w-full'>
      <FileView />
    </div>
  )
}

export default DownloadFile

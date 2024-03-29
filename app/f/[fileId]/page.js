"use client"
import React, { useEffect, useState } from 'react'
import FileView from './FileView';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import app from '../../../firebaseConfig';
function DownloadFile({params}) {

    const db = getFirestore(app);

    const [file, setFile]= useState(null)
    

    useEffect(() => {

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

        getFileInfo()
    },[])

  
    // console.log("parametersL  :::  ", params.fileId);
  return (
    <div className=' bg-gray-900 w-full h-screen  flex justify-center items-center
      mx-auto  px-4 py-32 lg:flex '>
      {
        file ? <FileView  file={file} /> : <div>Loading----</div>
      }
    </div>
  )
}

export default DownloadFile

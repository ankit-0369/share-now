"use client"

import app from '../../../../firebaseConfig'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import UploadForm from './_components/UploadForm'
import React, { useEffect, useState } from 'react'
import { doc, getFirestore, setDoc } from "firebase/firestore";
import UploadAlert from './_components/UploadAlert'
import { generateId } from '../../../_utils/generateId'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

function Upload() {
 
 const [progress, setProgress]= useState()
 const [uploadDone, setUploadDone]= useState(false)
 const [urlId, setUrlId]= useState()
const {user} = useUser()
const router= useRouter()

  const uploadFile= (file) =>{

    const metadata = {
      contentType: file.type
    };
      // console.log(file);
      const storage= getStorage(app)
      const storageRef = ref(storage, 'Images/' + file?.name);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      // console.log("storage is : " , storage)
      
      
      uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress)
        
      }, 
      (error) => {
        
       console.log(error)

      }, 
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          saveInfo(file, downloadURL);
        });
      }
    );

  }

  const saveInfo= async(file, fileUrl) =>{
  
    const db = getFirestore(app);
    const id= generateId().toString()
      console.log("id is here: ",id)
      console.log("shorturl: ", process.env.NEXT_PUBLIC_BASE_URL+'/f/' +id );
    await setDoc(doc(db, "uploadedFiles", id), {
      name: file?.name,
      size: file?.size,
      type: file?.type,
      fileUrl: fileUrl,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL+'/f/' +id,
      userEmail: user?.primaryEmailAddress.emailAddress,
      password: '',
      userName: user?.fullName,
      likes: 0

    });

    setUploadDone(true)
    setUrlId(id)

  }

  useEffect(()=>{

    uploadDone&& setTimeout(() => {
      setUploadDone(false)
      router.push('/file-preview/'+urlId)
    }, 2000);

  }, [uploadDone, router, setUploadDone, urlId])



  return (
    <div className='p-5 mx-8 md:mx-28'>
    
      { uploadDone &&<UploadAlert/>}
      {uploadDone && <div className='fixed z-50 border bg-gray-50'>
        loading---
      </div> }
      <h2
      className='text-[20px] text-center m-5'
      >Start <span className='text-primary font-bold'>Uploading</span> the Files and share it</h2>
      <UploadForm handleUpload={(file) => uploadFile(file)} progress={progress}/>
   
    </div>
  )
}

export default Upload

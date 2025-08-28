import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function EmailTemplateList() {
    const [emailList,setEmailList] = useState([])
  return (
    <div>
        <h2 className='font-bold text-xl mt-6 text-blue-500'>Workspace</h2>
        {emailList.length === 0 && 
        <div className='flex justify-center mt-7 flex-col items-center '>
            <Image src="/empty.jpeg" alt="empty" width={250} height={250} className='mx-auto mt-10'/>
         <Link href='/editor/1234578'>  <button  className='bg-black text-white p-2 rounded-lg hover:cursor-pointer mt-10'>+ Create New</button> </Link> 
        </div>
        }
    </div>
  )
}

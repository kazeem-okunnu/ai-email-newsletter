"use client"
import Image from 'next/image'
import Header from '@/components/custom/Header'
import React from 'react'
import { useUserDetail } from '@/app/provider'
import EmailTemplateList from '@/components/custom/EmailTemplateList'
import Link from 'next/link'

export default function page() {
    const {userDetail,setUserDetail} = useUserDetail()
  return (
    <div>
        <Header/>
        <div className='p-10 d:px-28 lg:px-40 xl:px-56 mt-16'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-3xl'>Hello,{userDetail?.name}</h2>
             <Link href={"/editor/1245678"}>  <button  className='bg-black text-white p-2 rounded-lg hover:cursor-pointer'>+ Create New Email Template</button></Link> 
            </div>
            <EmailTemplateList/>
        </div>
    </div>
  )
}

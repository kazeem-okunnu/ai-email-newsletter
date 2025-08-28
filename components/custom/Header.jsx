"use client"
import Image from 'next/image'
import React from 'react'
import SignInButton from './SignInButton'
import { useUserDetail } from '@/app/provider'
import Link from 'next/link'


export default function Header() {
  const {userDetail,setUserDetail} = useUserDetail()
  return (
    <div className='flex justify-between items-center p-4 shadow-sm px-10'>
        <Image src="/logo.svg" alt="logo" width={180} height={140} />
        <div>
          {userDetail?.email
          ? <div className='flex items-center gap-3'>
            <Link href='/dashboard' >
            <button  className='bg-black text-white p-2 rounded-lg hover:cursor-pointer'>Dashboard</button>
            </Link>
            <Image src={userDetail?.picture} alt='image' width={40} height={40} className='rounded-full'/>
          </div>:<SignInButton/>
          }
            
        </div>
    </div>
  )
}

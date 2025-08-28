"use client"
import { CodeSquare, Monitor, Smartphone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { useScreenSize } from '@/app/provider'

export default function EditorHeader({viewHTMLCode}) {
    const {screenSize,setScreenSize} = useScreenSize()
  return (
    <div className='p-4 shadow-sm flex justify-between items-center'>
        <Image src="/logo.svg" alt="logo" width={160} height={150} />
        <div className='flex gap-3'>
         <Button variant={"ghost"}
         onClick={()=>setScreenSize("desktop")}
         className={`${screenSize==="desktop"&&"bg-purple-200 text-primary"}`}
         ><Monitor/>Desktop</Button>
         <Button variant={"ghost"}
         onClick={()=>setScreenSize("mobile")}
         className={`${screenSize==="mobile"&&"bg-purple-200 text-primary"}`}
         ><Smartphone/>Mobile</Button>
        </div>
        <div className='flex gap-3'>
        <Button variant={"ghost"} 
        onClick={()=>viewHTMLCode(true)}><CodeSquare/></Button>
        <Button variant={"ghost"}><Smartphone/>Send Email Template</Button>
        <Button ><Smartphone/>Save Template</Button>

        </div>
    </div>
  )
}

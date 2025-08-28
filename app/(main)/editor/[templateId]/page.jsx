"use client"
import React, { useState } from 'react'
import EditorHeader from '@/components/custom/EditorHeader'
import ElementsSideBar from '@/components/custom/ElementsSideBar'
import Canvas from '@/components/custom/Canvas'
import Settings from '@/components/custom/Settings'

export default function page() {
  const [viewHTMLCode, setViewHTMLCode] =useState()
  return (
    <div>
        <EditorHeader viewHTMLCode={(v)=>setViewHTMLCode(v)}/>
        <div className='grid grid-cols-5'>
         <ElementsSideBar/>
         <div className='col-span-3 bg-gray-300'>
            <Canvas viewHTMLCode={viewHTMLCode}
            closeDialog={()=>setViewHTMLCode(false)}/>
         </div>
         <Settings/>
        </div>
    </div>
  )
}

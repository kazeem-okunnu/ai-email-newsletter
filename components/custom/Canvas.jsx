"use client"
import { useDragElementLayout, useEmailTemplate, useScreenSize } from '@/app/provider'
import React, { useEffect, useRef, useState } from 'react'
import ColumnLayout from '../LayoutElements/ColumnLayout'
import Layout from '@/Data/Layout'
import ViewHtmlDialog from './ViewHtmlDialog'

export default function Canvas({viewHTMLCode,closeDialog}) {
        const htmlRef = useRef()
        const {screenSize,setScreenSize} = useScreenSize()
        const {dragElementLayout,setDragElementLayout} = useDragElementLayout()
        const {emailTemplate,setEmailTemplate} = useEmailTemplate()
        const [dragOver,setDragOver] = useState(false)
        const [htmlCode,setHtmlCode] = useState()
        const onDragOverr = (e)=>{
      e.preventDefault()
      setDragOver(true)
      console.log("over..")
        }
        const onDropHandle = ()=>{
            setDragOver(false)
            if(dragElementLayout?.dragLayout){
 setEmailTemplate((prev)=>[...prev,dragElementLayout?.dragLayout])
            }
        }
    const getLayoutComponent = (layout) =>{
         if(layout?.type=="column"){
            return <ColumnLayout layout={layout}/>
         }
    }
     useEffect(()=>{
        viewHTMLCode && GetHTMLCode()
     },[viewHTMLCode])
    const GetHTMLCode=()=>{
       if(htmlRef.current){
        const htmlContent = htmlRef.current.innerHTML
        setHtmlCode(htmlContent)
       }
    }
  return (
    <div className='mt-20 flex justify-center'>
        <div className={` w-full 
            ${screenSize=="desktop"?"max-w-2xl":"max-w-md"}
            ${dragOver?"bg-green-100 p-7":"bg-white p-6"}`}
            onDragOver={onDragOverr}
            onDrop={()=>onDropHandle()}
            ref={htmlRef}
            >
                 {emailTemplate?.length> 0 ? emailTemplate?.map((layout,index)=>(
                    <div key={index}>
                  {getLayoutComponent(layout)}
                    </div>
                 )):
                 <h2 className='p-4 text-center bg-gray-300 border border-dashed'>Add Layout Here</h2>
                 }
        </div>
        <ViewHtmlDialog openDialog={viewHTMLCode} htmlCode={htmlCode} closeDialog={closeDialog}/>
    </div>
  )
}

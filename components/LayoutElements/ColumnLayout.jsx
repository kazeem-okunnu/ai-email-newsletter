"use client"
import { useDragElementLayout, useEmailTemplate, useSelectedElement } from '@/app/provider'
import React, { useState } from 'react'
import ButtonComponent from '../custom/Element/ButtonComponent'
import TextComponent from '../custom/Element/TextComponent'
import ImageComponent from '../custom/Element/ImageComponent'
import LogoComponent from '../custom/Element/LogoComponent'
import DividerComponent from '../custom/Element/DividerComponent'
import LinkComponent from '../custom/Element/LinkComponent'
import { Trash } from 'lucide-react'

export default function ColumnLayout({layout,index}) {

    const [dragOver,setDragOver] = useState()
    const {emailTemplate,setEmailTemplate} = useEmailTemplate()
            const {dragElementLayout,setDragElementLayout} = useDragElementLayout()
            const {selectedElement,setSelectedElement} = useSelectedElement()
    

    const onDragOverHandle = (event,index) =>{
        event.preventDefault()
        setDragOver({
            index:index,
            columnId:layout?.id
        })
    }
    const onDropHandle = () =>{
        const index= dragOver.index
        setEmailTemplate(prevItem =>
            prevItem.map(col=>col.id===layout?.id?{...col,[index]:dragElementLayout?.dragElement}:col)

        )
        setDragOver(null)
        
    }
    const GetElementComponent = (element)=>{
        if(element?.type=="Button"){
            return <ButtonComponent {...element}/>
        } else if(element?.type=="Text"){
            return <TextComponent {...element}/>
        }else if(element?.type=="Image"){
            return <ImageComponent {...element}/>
        }else if(element?.type=="Logo"){
            return <LogoComponent {...element}/>
        }else if(element?.type=="Divider"){
            return <DividerComponent {...element}/>
        }else if(element?.type=="Link"){
            return <LinkComponent {...element}/>
        }
     return element?.type
    }
const deleteLayout = (layoutId) =>{
   const updatedEmailTemplate = emailTemplate?.filter(item=>item.id!=layoutId)
   setEmailTemplate(updatedEmailTemplate)
   setSelectedElement(null)

}
  return (
    <div className='relative'>
        <div
        style={{
            display:"grid",
            gridTemplateColumns:`repeat(${layout?.numOfCol},1fr)`,
            gap:0,
            
        }}
        className={`${selectedElement?.layout?.id==layout?.id&&"border  border-dashed border-blue-600"}`}
        >
            {Array.from({length:layout?.numOfCol}).map((_,index)=>(
                <div key={index} className={`p-0 flex items-center cursor-pointer ${!layout?.[index]?.type&&" bg-gray-300 border border-dashed"}
                 justify-center
                    ${(index==dragOver?.index && dragOver?.columnId)&&"bg-green-200"}
                    ${(selectedElement?.layout?.id==layout?.id&&selectedElement?.index==index)&&"border-2 border-blue-500"}
                    `}
                onDragOver={(event)=>onDragOverHandle(event,index)}
                onDrop={()=>onDropHandle()}
                onClick={()=>setSelectedElement({layout:layout,index:index})}
                >
                    {GetElementComponent(layout?.[index]) ?? "Drag Element Here"}
                </div>
            ))}
         {selectedElement?.layout?.id==layout?.id&&  <div className='absolute cursor-pointer
          -right-10 bg-gray-100 p-2 rounded-full'  
          onClick={()=>deleteLayout(layout?.id)}
          >
                <Trash className='h-4 w-4 text-red-600'/>
            </div>}
        </div>
    </div>
  )
}

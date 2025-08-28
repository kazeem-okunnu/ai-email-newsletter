import { Input } from '@/components/ui/input'
import React from 'react'

export default function InputStyleField({onHandleStyleChange,label,value}) {

    const FormattedValue = (value)=>{
        console.log("onhandle"+onHandleStyleChange)
        return Number(value.toString().replace("px", ''))
        
        
    }
  return (
    <div>
     <label htmlFor="">{label}</label>
     <div className='flex'>
     <Input type="text" value={FormattedValue(value)} onChange={(e)=>onHandleStyleChange(e.target.value+"px")} />
     <h2 className='p-1 bg-gray-100 rounded-r-lg -ml-2'>px</h2>
     </div>
    </div>
  )
}

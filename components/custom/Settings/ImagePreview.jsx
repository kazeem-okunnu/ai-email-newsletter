import { Input } from '@/components/ui/input'
import React from 'react'

export default function ImagePreview({label,value,onHandleInputChange}) {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <img src={value} alt={value} className='w-full h-[150px] object-cover border rounded-xl' />
        <Input value={value}  onChange={(e)=>onHandleInputChange(e.target.value)} className={"mt-2"} />
    </div>
  )
}

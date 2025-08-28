import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

export default function DropdownField({label,value,options,onHandleStyleChange}) {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <Select onValueChange={(v)=>onHandleStyleChange(v)}  className="w-full" >
  <SelectTrigger className="w-full">
    <SelectValue  />
  </SelectTrigger>
  <SelectContent>
    {options.map((option,index)=>(
        <SelectItem key={index} value={option} >{option}</SelectItem>
    ))}
    
  </SelectContent>
</Select>

    </div>
  )
}

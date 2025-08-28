import React from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"


export default function ToogleGroupField({label, value,options, onHandleStyleChange}) {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <ToggleGroup  className="w-full" type="single"
        defaultValue={value}
        onValueChange={(value)=>onHandleStyleChange(value)}
        >
            
            {options.map((option,index)=>(
                  <ToggleGroupItem key={index} value={option?.value}><option.icon/></ToggleGroupItem>
                
            ))}
  
</ToggleGroup>

    </div>
  )
}

import { Slider } from '@/components/ui/slider'
import React from 'react'

export default function SliderField({label,value,onHandleStyleChange}) {
    const FormattedValue = (value)=>{
        console.log("onhandle"+onHandleStyleChange)
        return Number(value.toString().replace("px", ''))
        
        
    }
  return (
    <div>
        <label htmlFor="">{label}({value})</label>
        <Slider defaultValue={[FormattedValue(value)]} max={1000} step={1}
        onValueChange={(value)=>onHandleStyleChange(value+"px")}
        />

    </div>
  )
}

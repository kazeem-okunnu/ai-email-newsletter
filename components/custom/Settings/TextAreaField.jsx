import React from 'react'
import { Textarea } from "@/components/ui/textarea"

export default function TextAreaField({label,value,onHandleInputChange}) {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <Textarea value={value} onChange={(e)=>onHandleInputChange(e.target.value)} />

    </div>
  )
}

import React from 'react'

export default function ColorPickerField({onHandleStyleChange,label,value}) {
  return (
    <div className='grid'>
        <div><label htmlFor="">{label}</label></div>
        <input type="color" className='w-full' value={value} onChange={(e)=>onHandleStyleChange(e.target.value)}  />
    </div>
  )
}

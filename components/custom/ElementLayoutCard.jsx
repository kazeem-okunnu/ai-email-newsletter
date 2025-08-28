import React from 'react'

export default function ElementLayoutCard({layout, index}) {
  return (
    <div key={index} className='flex flex-col items-center justify-center border border-dashed rounded-xl p-3
            group hover:bg-gray-100 cursor-pointer transition-all duration-200 ease-in-out shadow-md border-blue-200'>
            
                {<layout.icon className='p-2 h-9 w-9 group-hover:text-blue-400'/>}
                <h2 className='text-sm  group-hover:text-blue-400'>{layout.label}</h2>
            </div>
  )
}

import React from 'react'

export default function TextComponent({style,content}) {
  return (
    <div className='w-full'>
        <h2 style={style}>{content}</h2>
    </div>
  )
}

import React from 'react'

export default function LogoComponent({style,imageUrl,outStyle}) {
  return (
    <div style={outStyle}>
        <img src={imageUrl} alt="logo" style={style}/>
    </div>
  )
}

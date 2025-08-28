import { Button } from '@/components/ui/button'
import React from 'react'

export default function ButtonComponent({style,content,url}) {
  return (
    <div>
        <a href={url} target="_blank" >
        <Button style={style}>{content}</Button>
        </a>
    </div>
  )
}

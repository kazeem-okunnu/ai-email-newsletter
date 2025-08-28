import React from 'react'

export default function LinkComponent({style,content,url}) {
  return (
    <a style={style} href={url}>{content}</a>
  )
}

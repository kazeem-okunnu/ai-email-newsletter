import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Copy } from 'lucide-react'
  

export default function ViewHtmlDialog({openDialog,htmlCode,closeDialog}) {

  const CopyCode =() =>{
    navigator.clipboard.writeText(htmlCode)
    alert('HTML code copied to clipboard')
  }
  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle >
        <div className='flex items-center justify-between'>
          <h2>HTML Email Template</h2>
        <Copy className='p-2 bg-gray-100 rounded-full h-8 w-8 cursor-pointer' onClick={CopyCode}/>
        </div> </DialogTitle>
      <DialogDescription asChild>
        <div className='max-h-[400px] overflow-auto bg-black text-white rounded-lg p-5'>
          <pre className='whitespace-pre-wrap break-all'>
            <code>
            {htmlCode}
            </code>
          </pre>
        
        </div>
        
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>


  )
}

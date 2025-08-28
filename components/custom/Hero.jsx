"use client"
import Image from 'next/image'
import React from 'react'
import SignInButton from './SignInButton'

export default function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 xl:px-56 flex flex-col justify-center items-center mt-24'>
        <h2 className='font-extrabold text-5xl text-center'>AI-Powered <span className='text-blue-500'>Email Templates</span></h2>
        <p className='text-center mt-4'>Create professional email templates in minutes with our AI-powered builder. Simply input your preferences, and our tool will generate custom designs and content that align with your brand. No design skills needed—save time and enhance your email marketing today!</p>
        <div className='flex gap-5 mt-6'>
            <button className='border border-black p-2 rounded-lg hover:cursor-pointer'>Try Demo</button>
            <SignInButton/>
        </div>
        <Image src="/landing.webp" alt="hero" width={1000} height={800} className='mt-10'/>
    </div>
  )
}

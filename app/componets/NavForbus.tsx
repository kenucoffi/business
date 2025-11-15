"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from '@deemlol/next-icons'
import MenuClick from './menu'
import { useState } from 'react'
import ThemeToggle from './DartThemButton'
const NavForbus = () => {
  const [open ,setOpen] =useState(false)
  return (
    <div>
    <div className="hidden md:block">
        <div className = " mt-4 ml-4 flex flex-row  justify-between ">
          
            <div className=' flex flex-row ustify-center lg:space-x-3'>
              <Link href="/business_website" > <Image src="/logo.png" alt='logo' width={50} height={100}/></Link>
              <div className="flex flex-row text-[12px] md:space-x-1 lg:space-x-3">
                  <div className="font-serif  lg:text-[14px] font-light cursor-pointer px-4 rounded-xl hover:bg-blue-500 text-white"><Link href="/pricePage">Price</Link></div>
                  <div className="font-serif lg:text-[14px] font-light cursor-pointer px-4 rounded-xl hover:bg-blue-500 text-white"><Link href="/">About</Link></div>
                  <div className="font-serif lg:text-[14px] font-light cursor-pointer px-4 rounded-xl hover:bg-blue-500 text-white"><Link href="/">Blog</Link></div>
                  <div className="font-serif lg:text-[14px] font-light cursor-pointer px-4 rounded-xl hover:bg-blue-500 text-white"><Link href="/">Wall of Love</Link></div>
                  <div className="font-serif lg:text-[14px] font-light cursor-pointer px-4 rounded-xl hover:bg-blue-500 text-white"><Link href="/">Resouce</Link></div>
              </div>
            </div>
            <div className="flex flex-row text-[12px] space-x-3 mr-5 lg:mr-15">
                <div className="font-serif lg:text-[14px] font-light cursor-pointer px-4 rounded-xl hover:bg-blue-500 text-white"><Link href="/">Sign In</Link></div>
                <div className="font-serif lg:text-[14px] font-light cursor-pointer px-4 rounded-xl hover:bg-blue-500 text-white"><Link href="/">Request Demo</Link></div>
            </div>
            
        </div>
      </div>
      <div className="md:hidden">
        <div className="mt-4 ml-4 flex flex-row  justify-between">
          <Link href="/business_website" className="p-2"> <Image src="/logo.png" alt='logo' width={50} height={100}/></Link>
          <div className="mr-6 p-2 cursor-pointer hover:bg-blue-700 flex justify-center " onClick={() =>{
            setOpen(!open)
          }}><Menu color='white'/></div>
          {open ? <MenuClick/> : null} 
        </div>
      </div>
    </div>
  )
}

export default NavForbus

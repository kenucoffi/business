import React from 'react'
import NavForbus from '../componets/NavForbus'

const First_page = () => {
  return (
    <div className='flex flex-col w-full h-[500px] bg-indigo-600 top-0'>
      <NavForbus/>
      <div className="flex flex-col w-full h-[400px] justify-center items-center space-y-4">
        <div className="font-bold text-white lg:text-5xl md:text-3xl text-3xl lg:w-3xl md:w-xl w-md">Several People Are Typing </div>
        <div className="font-light text-gray500 text-xl lg:w-3xl md:w-xl w-md  items-center">
            Lessons designed to help you kick start and grow your 
            business and turn your idea into a thriving empire.
        </div>
        <div className="flex flex-row space-x-2 lg:w-3xl md:w-xl w-md">
            <input type='email' placeholder='Your email' className="text-white rounded-2xl w-sm px-3 in-active:border-0 bg-neutral-700 "/>
            <div className="py-2 px-3 bg-green-500 text-white font-medium hover:text-gray-500 rounded-xl">Subscribe</div>
        </div>
      </div>
    </div>
  )
}

export default First_page

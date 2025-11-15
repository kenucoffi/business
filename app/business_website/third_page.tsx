import React from 'react'
import Image from 'next/image'
import CardBus2 from './CardBus2'


const Third_page = () => {
  return (
    <div className='bg-gray-100  h-full w-full '>
        <div className=' flex pt-8 pb-8 justify-center items-center   text-2xl md:text-4xl font-bold font-sans'><p className="w-lg text-center">The quick brown fox jumped over  the lazy dog</p></div>
        <div className="  flex flex-col col-span-1 justify-center items-center transition duration-400 space-y-4">
            <h1 className='md:text-2xl  text-md font-bold font-serif '>Built exclusively for you</h1>
            <p className="font-thin w-sm sm:w-md md:w-lg md:text-sm text-sm font-mono">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut  venenatis.</p>
            <CardBus2/>
        </div>
    </div>
  )
}

export default Third_page

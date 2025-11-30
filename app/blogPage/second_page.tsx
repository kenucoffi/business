import React from 'react'
import Image from 'next/image'
const Second_page = () => {
  return (
    <div className="flex flex-col w-full h-full lg:h-[650px] space-y-8 overflow-hidden">
        <div className="flex flex-row mt-5 ml-5 lg:w-3xl md:w-2xl sm:w-lg w-md  justify-between">
            <p className='text-lg text-blue-400 cursor-pointer text-bold'>Latest</p>
            <p className='text-lg text-gray-400 cursor-pointer hover:text-blue-400 text-bold'>Population</p>
            <p className='text-lg text-gray-400 cursor-pointer hover:text-blue-400 text-bold'>Tips & Trics</p>
            <p className='text-lg text-gray-400 cursor-pointer hover:text-blue-400 text-bold'>Products</p>
            <p className='text-lg text-gray-400 cursor-pointer hover:text-blue-400 text-bold'>Product News</p>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 pt-20 justify-items-center'>
          <div className="relative w-[400px] h-[350px] md:w-[500px] md:h-[450px]"> <Image src="/code3.jpg" fill alt='image' className='absolute'/></div>
            <div className='flex flex-col md:w-md xl:w-xl lg:w-lg w-sm space-y-3'>
                <p className='text-neutral-700 font-bold xl:text-6xl md:text-5xl text-4xl '>How startups can sell more using smart channels </p>
                <p className="text-gray-500 font-mono text-lg">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>
                <div className="flex flex-row items-center space-x-3 ">
                    <div className='relative btn btn-circle overflow-auto'><Image src="/code2.jpg"  fill alt='image' className='absolute object-center overflow-auto'/></div>
                    <p className="text-lg font-medium ">kenisa tetemke</p>
                    <p className='text-lg font-light'>Sep 24, 2021</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Second_page

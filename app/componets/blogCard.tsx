import React from 'react'
import Image from 'next/image'
interface BlogModule{
    title:String
    image:String
    profile:String
    description:String
    name:String
    date:String
}

const BlogCard = ({title,name,date,image,profile,description}:BlogModule) => {
  return (
    <div className="flex flex-col w-[330px] h-[500px] hover:scale-105 py-4 space-y-3">
        <div className='w-full h-[300px] relative object-center   overflow-auto'><Image src={"/"+ image} alt="img" fill className='absolute object-cover ' /></div>
        <p className='font-bold w-[330px] text-2xl text-orange-900'>{title}</p>
        <p className='font-light w-[330px] text-lg text-gray-400'>{description}</p>
        <div className="flex flex-row items-center space-x-3 ">
            <div className='relative btn btn-circle overflow-auto'><Image src={"/"+profile}  fill alt='image' className='absolute object-center overflow-auto'/></div>
            <p className="text-lg font-medium ">{name}</p>
            <p className='text-lg font-light'>{date}</p>
        </div>
    </div>
  )
}

export default BlogCard

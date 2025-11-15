import React from 'react'
import Image from 'next/image'
import NavForbus from '../componets/NavForbus'
const FirstPage = () => {
  return (
    <div className="w-full h-full ">        
        <div className="relative h-[450px] w-full overflow-auto">
            <Image src="/code1.jpg" alt="image" fill/>
            <div className="absolute h-full w-full overflow-hidden bg-indigo-600/70 ">
                <NavForbus/>
                <div className="w-full h-full overflow-hidden text-center flex justify-center items-center"> <h1 className="text-white text-5xl w-xl">We are designing a new way to do business</h1></div>
            </div>
        </div>
       <div className="relative flex flex-col w-full h-[400px] items-center justify-center mt-[-160px]">
            <div className="relative  w-[700px] h-[300px]  ">
                <Image src="/peoples.jpg" alt="image" fill/> 
            </div>
            <div className="absolute bottom-2 flex justify-center">
       <div className="flex flex-row justify-between items-center  h-[80px] w-[500px]   bg-sky-400 shadow-xl shfadow-gray-300">
            <div className="flex flex-col justify-center items-center text-white px-5 border-r border-white">
                    <h1 className="text-2xl ">17K</h1>
                    <p className="text-[10px]">paying customers</p>
                </div>
            <div className="flex flex-col justify-center items-center text-white px-5 border-r border-white">
                    <h1 className="text-2xl">$50M</h1>
                    <p className="text-[10px]">capital raised</p>
            </div>
            <div className="flex flex-col justify-center items-center text-white px-5 ">
                    <h1 className="text-2xl">140</h1>
                    <p className="text-[10px]">Team Members</p>
            </div>
        </div>
        </div>
       </div> 
       <div className="space-y-4 mt-10 mb-5 flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl">Our Story</h1>
        <p className="w-2xl text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. 
            Neque sodales ut etiam sit amet how to manage. Malesuada proin libero nunc consequat interdum varius. 
            Quam pellentesque nec nam aliquam sem et tortor consequat. Pellentesque adipiscing commodo elit at 
            imperdiet. Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec 
            enim diam. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Odio pellentesque diam volutpat 
            commodo sed. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.
        </p>
        <p className="w-2xl text-lg text-gray-400">
            Temper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam. Varius sit amet mattis vulputate enim nulla aliquet porttitor. 
            Odio pellentesque diam volutpat commodo sed. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.
        </p>
        <p className="text-lg text-gray-700 font-bold font-sans">
            Kenu Smart Web Solution Team 
        </p> 
       </div>
    </div>
  )
}

export default FirstPage

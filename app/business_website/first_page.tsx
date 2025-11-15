import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import NavForbus from '../componets/NavForbus'
const First_page = () => {
  return (
    <div className= " h-full w-full  bg-indigo-600 ">
        
        <NavForbus/>
        <div className="">
           
            
            <div className=" ">
                <div className="h-full grid grid-cols-1 lg:grid-cols-2 place-items-center">
                    
                    <div className="flex items-center justify-center  col-span-1">
                        <div className=" ">
                            <div className="flex ml-20 text-3xl md:text-5xl w-xs  md:w-lg m-2 text-white font-bold font-serif">
                                 Create stunning web expriances
                            </div> 
                            <div className = "flex ml-20 w-xs md:w-lg font-light  m-2 text-md md:text-lg text-gray-400  ">
                                Our landing page template works on all devices, 
                                so you only have to set it up once, 
                                and get beautiful results forever
                            </div>
                            <div className="ml-20 flex flex-row space-x-2">
                            <div className="cursor-pointer  py-2 px-4 bg-blue-500 text-white hover:bg-blue-700 justify-center">Request Demo</div>
                            <div className="cursor-pointer py-2 px-4 bg-gray-500 text-white hover:bg-gray-700 justify-center">Explore Products</div>
                            </div>
                        </div>
                    </div>
                    <div className="m-8  col-span-1 flex justify-center items-center ">
                        <Image src="/my_image2.png" alt="vedio" width={350} height={350}/>
                    </div>

                </div>
                
            </div>
        </div>
    {/* <div className="absolute bottom-0 left-0 w-full h-[] bg-white [clip-path:polygon(0%_0%,100%_50%,100%_100%,0%_100%)]"></div> */}
         {/* <div className="absolute left-0 right-0 bottom-0 h-40 w-full bg-white rounded-t-[100%] scale-x-100"></div>
           */}
    </div>
  )
}

export default First_page

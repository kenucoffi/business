import React from 'react'
import { Facebook, Twitter,Github,} from '@deemlol/next-icons'
import Image from "next/image"
const Footer = () => {
  return (
    <div className="relative w-full h-full bg-white ">
        <div className="grid lg:grid-cols-7 md:grid-cols-6 grid-cols-3  ">
            <div className="flex flex-col justify-center items-center md:col-span-6 lg:col-span-2 col-span-3 font-bold text-indigo-600 text-lg font-mono border-r">
                <Image src="/logo.png" alt='logo' width={50} height={50}/>
                <div className="font-bold text-indigo-600 text-lg font-mono">Kenu Smart Web Solution</div>
            </div>
            <div className="ml-4 md:col-span-6 lg:col-span-5 col-span-3 grid  grid-cols-4 space-y-3 md:grid-cols-4">
            <div className=" col-span-1 flex flex-col  justify-center">
                <h1 className="cursor-pointer font-bold text-[13px] md:text-sm hover:text-blue-700">How it works</h1>
                <h3 className="cursor-pointer font-medium text-[10px] md:text-sm hover:text-blue-700 text-gray-400">Overview</h3>
                <h3 className="cursor-pointer font-medium text-[10px] md:text-sm hover:text-blue-700 text-gray-400">Pricing</h3>
                <h3 className="cursor-pointer font-medium text-[10px] md:text-sm hover:text-blue-700 text-gray-400">Service area</h3>
            </div>
            <div className="col-span-1 flex flex-col justify-center ">
                <h1 className="cursor-pointer font-bold text-[13px] md:text-sm hover:text-blue-400">Resource</h1>
                <h3 className="cursor-pointer font-medium text-[10px] md:text-sm hover:text-blue-700 text-gray-400">Costemer storys</h3>
                <h3 className="cursor-pointer font-medium text-[10px] md:text-sm hover:text-blue-700 text-gray-400">Knowledge base</h3>
                <h3 className="cursor-pointer font-medium text-[10px] md:text-sm hover:text-blue-700 text-gray-400">Contact us</h3>
            </div>
            <div className="col-span-1 flex flex-col justify-center ">
                <h1 className="cursor-pointer font-bold hover:text-blue-700 text-[13px] md:text-sm">Products</h1>
                <h3 className="cursor-pointer font-medium hover:text-blue-700 text-[10px] md:text-sm text-gray-400">Corporet partner</h3>
                <h3 className="cursor-pointer font-medium hover:text-blue-700 text-[10px] md:text-sm text-gray-400">Secure Identity</h3>
                <h3 className="cursor-pointer font-medium hover:text-blue-700 text-[10px] md:text-sm text-gray-400">Legal Help</h3>
            </div>
            <div className="col-span-1 flex flex-col justify-center ">
                <h1 className="cursor-pointer font-bold hover:text-blue-700 text-[13px] md:text-sm">Company</h1>
                <h3 className="cursor-pointer font-medium hover:text-blue-700 text-[10px] md:text-sm text-gray-400">About Us</h3>
                <h3 className="cursor-pointer font-medium hover:text-blue-700 text-[10px] md:text-sm text-gray-400">Careers</h3>
                <h3 className="cursor-pointer font-medium hover:text-blue-700 text-[10px] md:text-sm text-gray-400">Term of Use</h3>
            </div>
        </div>
        </div>
        <div className='relative h-[50px]'>
            <div className=" mr-20 mb-3 absolute bottom-0  right-0 flex flex-row space-x-2 ">
                <Facebook color='black' size={20}/>
                <Twitter color="black" size={20}/>
                <Github color="black" size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Footer

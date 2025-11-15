"use client"
import React from 'react'
import {Disclosure, DisclosureButton,DisclosurePanel} from "@headlessui/react" 
import { Archive, ChevronDown } from '@deemlol/next-icons'
import { Archivo_Narrow } from 'next/font/google'

const data = [
    {title:"Can I upgrade or downgrade at any time?",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title:"What are the advantages of the Tidy Advanced Service?",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title:"Are there any commissions in addition to the monthly plans?",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title:"Can I request a refund?",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title:"What are my payment options?",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title:"Do you offer a discount for universities and students?",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
]
const ThirdPricePage = () => {
    const  lists = data.map((index) =>{
        return(
            <div className="w-full md:w-3xl">
                <Disclosure>
                    
                    {({open}) => (
                        <div className="">
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left text-black">
                                {index.title}
                                <ChevronDown color="blue" size={15} className={`transition duration-300 ${open ? "rotate-180 font-bold":"font-bold"}`}/>
                            </Disclosure.Button>
                            <Disclosure.Panel className="pt-4 pb-2 px-4 text-gray-700">
                                <div className="md:w-xl xs:w-xs sm:w-sm text-[13px] md:text-[17px] text-justify">{index.description}</div>
                            </Disclosure.Panel>
                        </div>
                    )}
                </Disclosure>
            </div>
            // <div className="collapce collapse-arrow ">
            //     <div className="collapse-title text-xl font-medium">{index.title}</div>
            //     <div className="collapse-content text-gray-700 ">{index.description}</div>
            // </div>
        )
    })

  return (
    <div className="h-full w-full  overflow-x-auto flex flex-col">
        <div className=" flex flex-col space-y-4">
            <div className="flex justify-center items-center m h-[100px]">
                <div className="font-bold md:text-4xl text-2xl text-neutral-900 flex justify-center items-center ">Frequently Asked Questions </div>
            </div>
            
            <div className=" mb-10 ">{lists}</div>
            
        </div>
      
    </div>
  )
}

export default ThirdPricePage

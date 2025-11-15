import React from 'react'
import Image from "next/image"
import { Heart } from '@deemlol/next-icons'

interface Card {
    image:String
    title:String
    description:String
    like:String
}
const Card2 = ({image,title,description,like}:Card) => {
  return (
    <div className="relative flex flex-col col-span-1 h-[150px] border rounded-xl shadow-gray-200 shadow-xl">
        <div className="relative overflow-auto object-center transition   rounded-xl h-[50%]"><Image src={"/"+image} alt="image" fill /></div>
        <div className="flex flex-col m-2 ">
            <div className=" font-light text-[8px]">{title} </div>
            <p className="mt-2 font-normal text-[10px]">{description}</p>
        </div>
        <div className=" absolute flex flex-row bottom-0 ml-3 mb-1 space-x-2">
            <Heart color="black" size={16}/>
            <h6 className="text-[10px] ">{like}</h6>
        </div>
    </div>
  )
}
 
export default Card2

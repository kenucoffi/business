import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import Image from "next/image"
import { Heart } from '@deemlol/next-icons'

interface Card {
  image:String
  title:String
  description:String
  like:String
  
}
const Card1:React.FC<Card>= ({image,title,description,like}) => {
  return (
    <div>
    <div className = "relative flex flex-col col-span-2 rounded-xl h-[150px] border-1">
        <div className= "relative overflow-auto rounded-xl aspect-square object-center  transition  h-[100%]  "><Image src={"/"+image} alt="news image" fill/></div>
        <div className = "absolute flex flex-col bottom-0 left-0 right-0 ml-4">
            <div className = "text-[8px] font-light text-white">{title}</div>
            <div className = "text-[10px] font-semibold text-white">{description}</div>
            <div className = "flex flex-row mt-2">
              <Heart size={16} color="white"/>
              <div className = "ml-2 text-white text-[10px]" >{like}</div>         
          </div> 
        </div>
    </div>
    </div>
  )
}

export default Card1

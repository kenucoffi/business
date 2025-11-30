"use client"
import Image from "next/image"
import { Swiper,SwiperSlide } from "swiper/react"
import {Navigation , Pagination,Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import  {cardinfo}  from "../CardInfo"
import Card1 from "./card1"
export default function SecondPage(){
    return(
         <div className="flex flex-col justify-center items-center  w-full h-[600px] bg-gray-100 ">           
            <div className="h-[200px] flex justify-center items-center"><div className="lg:w-xl md:w-lg w-md  md:text-4xl text-3xl text-neutral-800 text-center">We are fully distributed, which means you can join us whenever you want.</div></div>
            <div className="lg:w-[600px] md:w-[500px] w-[400px] ">
                  <Swiper  
                  spaceBetween={11} 
                  slidesPerView={1} 
                  modules={[Navigation,Pagination,Autoplay]}
                  pagination={{clickable:true}}
                  autoplay={{delay:3000 , disableOnInteraction:true}}
                  loop ={true}
                  >
                    {
                    cardinfo.map((index,key) => {
                        return (<SwiperSlide><Card1 image={index.image} title={index.title} description={index.description} like={index.like}/></SwiperSlide>)
                      } )
                    }
                  </Swiper>
                    
                  </div>
         </div>
    )
}

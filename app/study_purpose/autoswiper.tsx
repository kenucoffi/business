"use client"
import React from 'react'
import { Swiper ,SwiperSlide} from 'swiper/react'
import {Navigation , Pagination,Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { cardinfo } from '../CardInfo'
import Card1 from './card1'
 
const AutoSwiper = () => {
  const cards = cardinfo.map((index,key) =>{
    return (<SwiperSlide><Card1 image={index.image} title={index.title} description={index.description} like={index.like}/></SwiperSlide>)
  } ) 
  return (
      <div>
      <Swiper  
      spaceBetween={11} 
      slidesPerView={1} 
      modules={[Navigation,Pagination,Autoplay]}
      pagination={{clickable:true}}
      autoplay={{delay:3000 , disableOnInteraction:true}}
      loop ={true}
      >
        {cards}
      </Swiper>
        
      </div>
  )
}

export default AutoSwiper

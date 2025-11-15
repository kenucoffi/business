import React from 'react'

import Card2 from "./card2"
import AutoSwiper from "./autoswiper"
import Navbar from '../componets/Navbar'

import { cardinfo } from '../CardInfo'

const Study_pupose = () => {
  return (
    <div className="h-full w-full overflow-y-scroll overflow-x-auto">
      <Navbar/>
      <div className=" m-3 mt-5 border-1 shadow-xl rounded-xl">
          <div className=" m-3 flex flex-row space-x-2"> 
            {/* <div className="relative ">icon</div> */}
            <div className="flex justify-center text-[10px] font-normal rounded-xl p-2 hover:bg-gray-200">Discover</div>
            <div className="flex justify-center text-[10px] font-normal rounded-xl p-2 hover:bg-gray-200">Sport</div>
            <div className="flex justify-center text-[10px] font-normal rounded-xl p-2 hover:bg-gray-200 ">News</div>
            <div className="flex justify-center text-[10px] font-normal rounded-xl p-2 hover:bg-gray-200 ">Money</div>
            <div className="flex justify-center text-[10px] font-normal rounded-xl p-2 hover:bg-gray-200 ">Weather</div>
          </div>
          <div className="ml-2 grid grid-cols-5 space-x-2 space-y-2">

              <div className="col-span-2 "><AutoSwiper/></div>
              <div className="col-span-1"><Card2 image={cardinfo[0].image} title={cardinfo[0].title} description={cardinfo[0].description} like={cardinfo[0].like}/></div>
              <div className="col-span-1"><Card2 image={cardinfo[1].image} title={cardinfo[1].title} description={cardinfo[1].description} like={cardinfo[1].like}/></div>
              <div className="col-span-1"><Card2 image={cardinfo[2].image} title={cardinfo[2].title} description={cardinfo[2].description} like={cardinfo[2].like}/></div>
              <div className="col-span-1"><Card2 image={cardinfo[3].image} title={cardinfo[3].title} description={cardinfo[3].description} like={cardinfo[3].like}/></div>
              <div className="col-span-2"><AutoSwiper/></div>
              <div className="col-span-1"><Card2 image={cardinfo[4].image} title={cardinfo[4].title} description={cardinfo[4].description} like={cardinfo[4].like}/></div>
              <div className="col-span-1"><Card2 image={cardinfo[5].image} title={cardinfo[5].title} description={cardinfo[5].description} like={cardinfo[5].like}/></div>
              <div className="col-span-1"><Card2 image={cardinfo[6].image} title={cardinfo[6].title} description={cardinfo[6].description} like={cardinfo[6].like}/></div>
              <div className="col-span-1"><Card2 image={cardinfo[7].image} title={cardinfo[7].title} description={cardinfo[7].description} like={cardinfo[7].like}/></div>
              <div className="col-span-1"><Card2 image={cardinfo[4].image} title={cardinfo[4].title} description={cardinfo[4].description} like={cardinfo[4].like}/></div>
              <div className="col-span-2"><AutoSwiper/></div>
              <div className="col-span-1"><Card2 image={cardinfo[2].image} title={cardinfo[2].title} description={cardinfo[2].description} like={cardinfo[2].like}/></div>
              <div className="col-span-1"><Card2 image={cardinfo[0].image} title={cardinfo[0].title} description={cardinfo[0].description} like={cardinfo[0].like}/></div>
              <div className="col-span-1"><Card2 image={cardinfo[1].image} title={cardinfo[1].title} description={cardinfo[1].description} like={cardinfo[1].like}/></div>
          </div>
      </div>
    </div>
  )
}

export default Study_pupose

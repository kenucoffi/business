import { CheckSquare } from '@deemlol/next-icons'
import React from 'react'


interface CardsInfo{
  price:String
  available:String[] 
}

const CardPay = ({price,available}:CardsInfo) => {
  return (
    <div className="relative col-span-1 h-[400px] flex flex-col border border-green-300 shadow-2xl shadow-gray-500 bg-white">
      <div className="w-[250px]  m-3 h-[30%] space-y-2">
        <h1 className="font-bold text-lg">Essencial</h1>
        <div className=" flex flex-row items-center">
            
            <span className="font-light text-2xl text-green-300 ">$</span>
            <h1 className="font-bold text-2xl">{price}</h1>
            <span className="font-light text-bottom text-gray-500 text-sm">/mont</span>
        </div>
            
        <h1 className="text-gray-700 font-light text-[14.5px]">Better insights for growing businesses that want more customers.</h1>
        <hr className="text-gray-500"></hr>
      </div>
      <div className="w-[250px]  m-3 ">
         <h1 className="font-normal  "> Feature include:</h1>
         <div className="flex flex-col ml-2 ">
            {available.map((index) => {
              return (
                 <div className="flex flex-row space-x-2 items-center">
                    <CheckSquare color="green" size={15}/>
                    <h1 className="font-light text-gray-700 text-[14.5px]">{index}</h1>
                 </div>
              )
            })}
           
            
         </div> 
      </div>
    
      <div className=" absolute bottom-0 w-[250px]">
        <div className="flex justify-center ">
            <div className=" mb-2 py-1 px-4 bg-indigo-600 text-white hover:bg-indigo-800 rounded-xl">start trail now</div>
        </div>
      </div>
    </div>
  )
}

export default CardPay

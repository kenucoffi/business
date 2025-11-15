import Navbar from '@/app/componets/Navbar'
import React from 'react'
import CardPay from '../business_website/CardPay'
import NavForbus from '@/app/componets/NavForbus'

const data =[
  {card:1,price:"49",available:["50 Placeholder text commonly","Consectetur adipiscing elit","Excepteur sint occaecat cupidatat","Officia deserunt mollit anim"]},
  {card:2,price:"79",available:["100 placeholder text commonly","Consectetur adipiscing elit","Excepteur sint occaecat cupidatat","Officia deserunt mollit anim","Placeholder text commonly used"]},
  {card:3,price:"129",available:["200 placeholder text commonly","Consectetur adipiscing elit","Excepteur sint occaecat cupidatat","Officia deserunt mollit anim","Voluptate velit esse cillum","Placeholder text commonly used"]},
]

const HeroPage = () => {
  const cards = data.map((card) =>{
    return(
      <CardPay price={card.price} available={card.available}/>
    )
  })
  return (
    <div className=" w-full h-full flex flex-col ">
        <div className=" top-0  h-[450px] w-full  bg-indigo-600">
            <NavForbus/>
            <div className="flex justify-center items-center h-[250px]">
                <h1 className="font-bold md:text-4xl text-2xl md:w-lg w-sm text-white text-center font-mono">Find the right plan for your business</h1>
            </div>
            {/* <div className="absolute bottom-0 left-0 w-full h-[50px] bg-white [clip-path:polygon(0%_0%,100%_50%,100%_100%,0%_100%)]"></div> */}
            
          
        </div>
        <div className="mt-[-130px] grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  place-items-center space-y-6  lg:space-x-4 mb-10">
            {cards}
            <div className='hidden md:block lg:hidden'>
              <CardPay price="Free trial" available={data[0].available} />
            </div>
        </div>
      
    </div>
  )
}

export default HeroPage

"use client"
import { useState } from "react"
const cards = [
    {id :1,title:"Internal Feadback",description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" },
    {id :2,title:"Internal Feadback",description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" },
    {id :3,title:"Internal Feadback",description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" },
]

export default function CardBus2(){
    const [selected ,setSelected] = useState(1)
    return(

        <div className="m-1 h-full w-sm sm:w-md md:w-lg col-span-1 transition duration-300 flex flex-col">
            { cards.map((card) => {
                return (
                    <div

                    onClick = {()=>{ setSelected(card.id)}}
                className={`cursor-pointer m-2 flex flex-col duration-300 transition 
               ${selected && selected === card.id ? 'border-2 border-blue-500 opacity-100 scale-105' : 'border-white opacity-40' } `}
                   >
                <h1 className=" ml-3 font-medium ">{card.title}</h1>
                <p className="ml-3 font-light ">{card.description}</p>
                </div>
                )
            })
            
            }
        </div>
    )
}
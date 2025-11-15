import React from 'react'
import Table1 from '../componets/Table1'

const SecondPricePage = () => {
  return (
    <div className="relative h-[700px] w-full bg-green-100  ">
      <div className=" pt-4 h-[100px] flex justify-center items-center">
        <h1 className="md:w-lg text-2xl md:text-4xl text-blue-500 font-bold">Compare plans by features</h1>
      </div>
      <Table1/>   
      <div className="absolute bottom-0 flex items-center justify-center w-full">
        <div className="px-4 py-2 rounded-xl bg-green-500 hover:bg-green-700 mb-10">Reques Demo</div>
      </div>
    </div>
  )
}

export default SecondPricePage

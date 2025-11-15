import React from 'react'
import HeroPage from './HeroPage'
import SecondPricePage from './secondPage'
import ThirdPricePage from './thirdPricePage'
import Fifth_page from '../business_website/fith_page'

const page = () => {
  return ( 
    <div className="flex flex-col ">
      <div className=""> <HeroPage/></div>
      
      <SecondPricePage/>
      <ThirdPricePage/>
      <Fifth_page/>
    </div>
  )
}

export default page

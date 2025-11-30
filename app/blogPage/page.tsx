import React from 'react'
import First_page from "./first_page"
import Second_page from './second_page'
import Third_page from './third_page'
const page = () => {
  return (
    <div className="flex flex-col">
      <First_page/>
      <Second_page/>
      <Third_page/>
    </div>
  )
}

export default page

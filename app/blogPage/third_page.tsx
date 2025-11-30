import { describe } from 'node:test'
import React from 'react'
import BlogCard from '../componets/blogCard'

const Latest = [
  {name:"piter rabit",description:"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.",title:"A sneak peek of the new Tidy Web Portal",image:"blog-post-02.jpg",profile:"img1.jpg",date:"Sep 24, 2024"},
  {name:"bob marly",description:"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.",title:"40+ creative content ideas to post on your blog",image:"blog-post-03.jpg",profile:"img2.jpg",date:"Oct 20, 2024"},
  {name:"harry poter",description:"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.",title:"The best marketing channels to promote your products",image:"blog-post-04.jpg",profile:"img3.jpg",date:"Nov 4, 2024"},
]
const Popular =[  
  {name:"jon merfy",description:"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.",title:"Where to Post Remote Jobs for Developers for Free",image:"blog-post-05.jpg",profile:"img4.jpg",date:"Dec 2, 2024"},
  {name:"clark",description:"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.",title:"4 Must-Know Skill to Be an Effective Leader",image:"blog-post-06.jpg",profile:"img5.jpg",date:"Jun 5, 2024"},
  {name:"reven jons",description:"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.",title:"Remote founder stand-up with Mark Muller",image:"blog-post-07.jpg",profile:"img6.jpg",date:"Oct 10, 2024"},
]

const Third_page = () => {
  return (
    <div className="w-full h-full bg-gray-300 mt-10 py-10 flex flex-col justify-center items-center">
      <p className='text-2xl font-bold cursor-pointer hover:text-green-500 text-indigo-500 py-5'>Latest</p>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  space-x-7  '>
        {Latest.map((data)=> {
        return(
          <div>
            <BlogCard title={data.title} name={data.name} image={data.image} profile={data.profile} description={data.description} date={data.date}/>
          </div>
          )})}
    </div>
    <p className='text-2xl cursor-pointer hover:text-green-500 font-bold text-indigo-500 py-5'>Popular</p>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-x-7 p-5'>
          {Popular.map((data)=>{
          return (
          <div>
            <BlogCard title={data.title} name={data.name} image={data.image} profile={data.profile} description={data.description} date={data.date}/>
          </div>
          )})}
      </div>
    </div>
  )
}

export default Third_page

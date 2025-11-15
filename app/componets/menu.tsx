import Link from 'next/link'
import React from 'react'

const MenuClick = () => {
  return (
    <div className='absolute top-0 left-0 w-[150px] h-[280px] bg-white/80 shadow-xl shadow-gray-300 z-50'>
        <div className="mt-10 ml-6 flex flex-col space-y-2">
            <div className="text-indigo-600 text-[13px] font-bold hover:text-blue-500 py-2 border-b border-gray-400"><Link href="/pricePage">price</Link></div>
            <div className="text-indigo-600 text-[13px] font-bold hover:text-blue-500 py-2 border-b border-gray-400"><Link href="/pricePage">About</Link></div>
            <div className="text-indigo-600 text-[13px] font-bold hover:text-blue-500 py-2 border-b border-gray-400"><Link href="/pricePage"> Blog </Link></div>
            <div className="text-indigo-600 text-[13px] font-bold hover:text-blue-500 py-2 border-b border-gray-400"><Link href="/pricePage">well of love</Link></div>
            <div className="text-indigo-600 text-[13px] font-bold hover:text-blue-500 py-2 border-b border-gray-400"><Link href="/pricePage">Resource</Link></div>
        </div>
      
    </div>
  )
}

export default MenuClick

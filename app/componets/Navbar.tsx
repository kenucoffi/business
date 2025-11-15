import React from 'react'

const Navbar = () => {
  return (
    <div className="flex top-0 left-0 justify-center  ">
        <div className="flex justify-center mt-3 shadow-xl shadow-gray-200">
            <input placeholder='search news' width={20} className="active:border-none hover:border-none  m-2 " />
        </div>
    </div>
  )
}

export default Navbar

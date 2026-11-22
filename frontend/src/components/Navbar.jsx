import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-screen border-b border-[#947B51]'>
      <div className="max-w-[1120px] mx-auto px-3 py-4 flex">
        {/* <img className='w-[110px]' src={logo} alt="Logo" /> */}
        <p className='font-semibold text-[32px] text-[#947B51]'>
            Tisinthe
        </p>
      </div>
    </div>
  )
}

export default Navbar

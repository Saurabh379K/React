import React from 'react'
// components are the building blocks of a React application. 
// They are reusable pieces of code that can be used to create UI elements. 
// Components can be functional or class-based.
const Header = () => {
  return (
    <>
      <nav className='bg-emerald-950 flex py-5 px-10 items-center justify-between'>
        <h2 className='text-2xl'>Nav Bar</h2>
        <div className='flex gap-8 items-center'>
          <h4 className='text-xl'>About</h4>
          <h4 className='text-xl'>Contact</h4>
          <h4 className='text-xl'>Services</h4>
          <h4 className='text-xl'>Your Account</h4>
        </div>
      </nav>
    </>
  )
}

export default Header
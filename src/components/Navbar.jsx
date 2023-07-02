import React from 'react'

function Navbar() {
    const name="< zakaria />."
  return (
    <div className='border-b-4 '>
      <div className="nav flex justify-between items-center p-4   w-5/6 text-black mx-auto">
         <div className='text-xl font-bold'>
            {name}
        </div>
        <div className=''>
          <nav className='flex gap-4 '>
            <a className='cursor-pointer text-black hover:scale-110 transition-all'>Home</a>
            <a className='cursor-pointer text-black hover:scale-110 transition-all'>About</a>
            <a className='cursor-pointer text-black hover:scale-110 transition-all'>Education</a>
            <a className='cursor-pointer text-black hover:scale-110 transition-all'>Projects</a>
            <a className='cursor-pointer text-black hover:scale-110 transition-all'>Contact</a>          
        </nav >
        {/* <div className="dot w-4 border-b-4 border-dotted translate-x-3 hidden "></div> */}
        </div>
        <div><a href="https://twitter.com/zakariamourid10" className=' hover:underline transition-all hover:text-blue-500' target='_blank' >@zakariamourid10</a></div>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'

function Navbar() {
    const name="<Zakaria />"
  return (
    <div className='flex justify-between items-center  w-5/6 bg-red-300 mx-auto'>
        <h1>
            {name}
        </h1>
        <ul className='flex gap-2 '>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Education</li>
            <li className='cursor-pointer'>Projects</li>
            <li className='cursor-pointer'>Contact</li>

        </ul>
        <div>@zakariamourid</div>
    </div>
  )
}

export default Navbar
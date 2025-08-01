import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-violet-800 flex text-white p-2 text-xl justify-around ">
        <div className='font-bold'>
                        <span className='text-violet-200 font-bold'>&lt;</span>i<span className='text-violet-200'>Task/&gt;</span>
        </div>
   <nav >
   <ul className='flex gap-4'>
     <li className='hover:font-bold'>Home</li>
          <li className='hover:font-bold'>Work</li>
 <li className='hover:font-bold'>Your Task</li>
   </ul>
   </nav>
   </div>

  )
}

export default Navbar
import React from 'react';
import { NavLink } from '../data/data';
import {motion} from 'framer-motion';

const Navbar = () => {
  return (
    <motion.div 
    whileInView={{
      y:[-50,0]
    }}
    className='w-screen bg-white drop-shadow dark:drop-shadow-white py-2 sticky top-0 z-20 dark:bg-gray-800 dark:text-white hidden md:block'>

      <div className="flex justify-center items-center">
    {NavLink.map(navlink=>(
      <a href={`#${navlink.name}`} key={navlink.id} className={`flex justify-center items-center uppercase hover:bg-gray-400 duration-500 p-2 rounded-lg`}>
        <span className='mr-2'>{navlink.icon}</span>
        {navlink.name}
      </a>
    ))}
    </div>
    </motion.div>
  )
}

export default Navbar
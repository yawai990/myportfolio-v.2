import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from '../data/data';
import { useStateContext } from '../context/Context';
import {motion} from 'framer-motion';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const Sidebar = () => {
    const {setTheme,openSidebar,sidebar} = useStateContext();
  return (
    <div className='w-screen h-screen bg-transparent-2 fixed z-50'>
        <div className='w-10/12 h-full bg-white fixed right-0 dark:bg-slate-600'>
            <div className="fixed top-10 right-10">
            <TooltipComponent content='Close' position="BottomCenter" >
                <button onClick={openSidebar} className='w-8 h-8 text-xl rounded-full bg-white drop-shadow hover:bg-gray-400 hover:text-white hover:drop-shadow-2xl flex justify-center items-center'>
                         <AiOutlineClose />
                </button>
            </TooltipComponent>
            </div>  
        <div className="h-full flex flex-col justify-center items-center">
    {NavLink.map(navlink=>(
      <motion.a
      initial={{
        opacity:0
      }}
    whileInView={{
        x:[250,0],
        opacity:[0,1]
    }}
    transition={{
        type:"tween",
        delay:0.03 * navlink.id
    }}
      href={`#${navlink.name}`} 
      key={navlink.id} 
      className={`my-2 flex justify-center items-center uppercase hover:bg-gray-400 duration-500 p-2 rounded-lg dark:text-white`}
      onClick={openSidebar}>
        <span className='mr-2'>{navlink.icon}</span>
        {navlink.name}
      </motion.a>
    ))}
    </div>
        </div>
    </div>
  )
}

export default Sidebar
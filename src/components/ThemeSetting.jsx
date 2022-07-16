import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {BsCheck2} from 'react-icons/bs';
import { useStateContext } from '../context/Context';
import { themeColors } from '../data/data';

const ThemeSetting = () => {
    const {currentMode,setMode,setTheme,setColor,currentColor} = useStateContext();
  return (
    <div className='w-screen h-screen bg-transparent-2 fixed z-50'>
      
    <div style={{zIndex:'1000'}} className='w-60 h-full absolute right-0 bg-white drop-shadow-3xl rounded-tl-lg p-2'>

      <div className='flex justify-between items-center'>
    <h2 className='p-2 font-semibold'>Set Theme Mode</h2>
    <button onClick={setTheme} className='w-8 h-8 text-xl rounded-full bg-white drop-shadow hover:bg-red-700 hover:tr hover:drop-shadow-2xl flex justify-center items-center'>
      <AiOutlineClose />
    </button>
      </div>
    <div className='p-2'>
    <input type="radio" name='mode' id='light' value="light" onChange={setMode} checked={currentMode === 'light'} />
    <label htmlFor="light" className='text-lg ml-2'>Light</label>
  </div>
    <div className='p-2'>
    <input type="radio" name='mode' id='dark' value="dark" onChange={setMode} checked={currentMode === 'dark'} />
    <label htmlFor="dark" className='text-lg ml-2'>Dark</label>
  </div>

  <h2 className='p-2 mt-3 font-semibold'>Theme Color</h2>

  <div className='w-full p-2 flex flex-wrap gap-3'>
  {themeColors.map((color,ind)=>(
    <div style={{backgroundColor:color.color}} key={ind} className='w-7 h-7 rounded-full'>

      <button onClick={()=>setColor(color.color)} className='w-full h-full text-xl text-white flex justify-center items-center'>
        <BsCheck2 className={`${color.color === currentColor ? 'block':'hidden'}`} />
      </button>
    </div>
  ))}
    </div>
</div>
</div>
  )
}

export default ThemeSetting
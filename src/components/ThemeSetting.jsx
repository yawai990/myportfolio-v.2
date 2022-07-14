import React from 'react';
import {BsCheck2} from 'react-icons/bs';
import { useStateContext } from '../context/Context';
import { themeColors } from '../data/data';

const ThemeSetting = () => {
    const {currentMode,setMode,setColor,currentColor} = useStateContext();
  return (
    <div className='w-screen h-screen bg-transparent fixed z-50'>
      
    <div style={{zIndex:'1000'}} className='w-60 h-full absolute right-0 bg-red-400 rounded-lg'>
    <h2 className='p-2 font-semibold'>Set Theme Mode</h2>
    <div>
    <input type="radio" name='mode' id='light' value="light" onChange={setMode} checked={currentMode === 'light'} />
    <label htmlFor="light" className='text-lg ml-2'>Light</label>
  </div>
    <div>
    <input type="radio" name='mode' id='light' value="dark" onChange={setMode} checked={currentMode === 'dark'} />
    <label htmlFor="light" className='text-lg ml-2'>Dark</label>
  </div>

  <h2>Theme Color</h2>

  <div className='w-full p-2 flex flex-wrap gap-3'>
  {themeColors.map((color,ind)=>(
    <div style={{backgroundColor:color.color}} key={ind} className='w-10 h-10 rounded-full'>

      <button onClick={()=>setColor(color.color)} className='w-full h-full text-2xl text-white flex justify-center items-center'>
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
import React from 'react';
import { NavLink } from '../data/data';

const Navbar = () => {
  return (
    <div className='w-full drop-shadow-3xl bg-red-300'>

    <h1>I am nav</h1>

    <div>
      <input type="radio" name='light' id='light' />
      <label htmlFor="light">Light</label>
    </div>
    </div>
  )
}

export default Navbar
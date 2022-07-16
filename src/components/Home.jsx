import React from 'react';
import {useStateContext} from '../context/Context';

const Home = () => {
  const {currentColor} = useStateContext();

  return (
    <div className='w-screen h-screen flex dark:text-slate-200 dark:bg-gray-800'>
            <div className='w-2/4 h-full flex justify-center items-center'>
              <div id="profile" className='w-80 h-80 bg-red-400'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className='w-full h-full object-cover object-center' />
              </div>
            </div>
            <div className='w-2/4 h-full flex flex-col justify-center items-start p-2'>
                    <h1 className='text-4xl font-bold tracking-wide'>
                      <span>Hi</span>
                      , I am Yawai Aung
                    </h1>

                    <p style={{color:currentColor}} className='my-3 text-2xl uppercase font-semibold tracking-widest'>front end developer</p>

                    <p className='w-5/6 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur exercitationem adipisci obcaecati magni dignissimos facere repellat voluptatibus autem quibusdam.</p>
            </div>
    </div>
  )
}

export default Home
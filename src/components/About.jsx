import React from 'react';
import {useStateContext} from '../context/Context';
import {AiFillPrinter,AiFillFilePdf} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';

const About = () => {
  const {currentColor} = useStateContext();
  return (
          <div className="w-full h-screen">
            <div className='w-screen h-4/5 dark:text-white flex flex-col justify-center items-center relative z-z-1'>
              <img src="https://images.unsplash.com/photo-1600695268275-1a6468700bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-full h-full absolute top-0 left-0 object-cover object-center z-z-1' />
              {/* <div className='w-full h-full bg-black/[.3] absolute z-1'></div> */}
                <div className="w-16 h-16 rounded-full bg-red-400"></div>
              <div style={{borderColor:currentColor}} className='w-40 border-b p-2'>
               <h1 className='text-center uppercase tracking-widest font-semibold text-slate-400'>yawai aung</h1>
              </div>

              <div style={{borderColor:currentColor}} className='border-b-2 p-2'>
                <p className='uppercase tracing-wider font-semibold text-slate-300 tracking-wider'>Junior Front End Developer</p>
              </div>
            </div>

            <div className='h-1/5 flex gap-2 p-4 dark:bg-slate-800'>
           
              <h1 className='w-52 text-center mt-2 capitalize font-semibold'>about</h1>
          

              <p className='flex-1 text-justify p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nobis officiis reprehenderit eos est numquam, quidem harum explicabo voluptatem expedita voluptatum nulla quisquam quo ratione ea sint quaerat! Earum architecto sed nam ipsum reprehenderit eaque impedit quasi! Eius rerum omnis, earum deleniti illum fugiat cumque provident iusto, facere reprehenderit delectus!</p>

              <div className='w-48 h-full pt-2'>

                  <button className='flex block uppercase text-sm font-semibold tracking-wide mb-3'>
                    <span className='mr-2 text-slate-300 text-2xl'>
                      <AiFillPrinter />
                    </span>
                    print resume</button>
                  <button className='flex block uppercase text-sm font-semibold tracking-wide mb-3'>
                    <span className='mr-2 text-slate-300 text-2xl'><AiFillFilePdf /></span>
                    download pdf</button>
                  <button className='flex block uppercase text-sm font-semibold tracking-wide'>
                    <span className='mr-2 text-slate-300 text-2xl'><FaLinkedinIn /></span>
                    linked in</button>
              </div>
            </div>
          </div>
  )
}

export default About;
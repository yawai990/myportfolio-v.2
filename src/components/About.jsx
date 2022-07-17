import React from 'react';
import {useStateContext} from '../context/Context';
import {motion} from 'framer-motion';
import {AiFillPrinter,AiFillFilePdf} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css";

const About = () => {
  const {currentColor} = useStateContext();
  return (
          <div id='about' className="w-full h-auto md:h-screen dark:bg-gray-800">
            <div className='w-screen h-80 md:h-4/5 dark:text-white flex flex-col justify-center items-center relative'>
              <img src="https://images.unsplash.com/photo-1600695268275-1a6468700bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-full h-full absolute top-0 left-0 object-cover object-center' />
                <div className="w-16 h-16 rounded-full bg-red-400"></div>
              <div style={{borderColor:currentColor}} className='w-40 border-b p-2 bg-red-500'>
               <h1 className='text-center uppercase tracking-widest font-semibold text-slate-400'>yawai aung</h1>
              </div>

              <div style={{borderColor:currentColor}} className='border-b-2 p-2'>
                <p className='uppercase tracing-wider font-semibold text-slate-300 tracking-wider'>Junior Front End Developer</p>
              </div>
            </div>

            <div className='h-auto md:h-1/5 flex flex-col md:flex-row flex-wrap gap-2 p-4'>
           
           <AnimationOnScroll initiallyVisible={true} animateIn='animate__fadeInLeftBig'>
              <h1 className='w-full md:w-52 dark:text-gray-600 text-center text-3xl mt-2 capitalize font-semibold'>about</h1>
           </AnimationOnScroll>
          

              <p className='flex-1 dark:text-gray-400 text-justify p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nobis officiis reprehenderit eos est numquam, quidem harum explicabo voluptatem expedita voluptatum nulla quisquam quo ratione ea sint quaerat! Earum architecto sed nam ipsum reprehenderit eaque impedit quasi! Eius rerum omnis, earum deleniti illum fugiat cumque provident iusto, facere reprehenderit delectus!</p>

              <div className='w-full md:w-48 h-full flex justify-around items:center md:flex-col pt-2'>

                  <motion.button 
                     initial={{
                      opacity:0
                    }}
                  whileInView={{
                    x:[-100,0],
                    opacity:1
                  }}
                  transition={{
                    duration:0.5
                  }}
                  className='flex block uppercase text-sm font-semibold tracking-wide mb-3 dark:text-gray-400'>
                    <span className='mr-2 text-slate-300 text-2xl'>
                      <AiFillPrinter />
                    </span>
                    print resume</motion.button>
                  <motion.button
                       initial={{
                        opacity:0
                      }}
                  whileInView={{
                    x:[-100,0],
                    opacity:1
                  }}
                  transition={{
                    duration:0.5,
                    delay:0.5
                  }}
                  className='flex block uppercase text-sm font-semibold tracking-wide mb-3 dark:text-gray-400'>
                    <span className='mr-2 text-slate-300 text-2xl'><AiFillFilePdf /></span>
                    download pdf</motion.button>
                  <motion.button 
                       initial={{
                        opacity:0
                      }}
                  whileInView={{
                    x:[-100,0],
                    opacity:1
                  }}
                  transition={{
                    duration:0.5,
                    delay:1
                  }}
                  className='flex block uppercase text-sm font-semibold tracking-wide dark:text-gray-400'>
                    <span className='mr-2 text-slate-300 text-2xl'><FaLinkedinIn /></span>
                    linked in</motion.button>
              </div>
            </div>
          </div>
  )
}

export default About;
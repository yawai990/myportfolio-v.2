import React from 'react';
import {RiGithubFill,RiEyeFill} from 'react-icons/ri';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { workData } from '../data/data';

const Work = () => {
  return (
    <div className='w-full bg-slate-800 p-2'>

              <p className='text-center text-slate-600'>name of my recent works</p>
              <p className='text-2xl text-gray-300 text-center mt-3 uppercase font-semibold tracking-wider'>projects
              <span className='w-20 m-auto mt-2 border-b border-4 rounded-lg border-cyan-800 block'></span>
              </p>
              
              <div className='w-full mt-5 md:px-5'>
              <div className='w-full md:w-11/12 m-auto'>
                
               <Carousel showArrows={true} autoPlay={true} interval={3000} showThumbs={false} infiniteLoop={true}>

                {workData.map(work=>(
                   <div key={work.id} className='w-full h-auto rounded-lg flex flex-wrap justify-center md:justify-between drop-shadow-3xl'>
                           {work.projects.map(project=>(
                            <div key={project.id} className='w-full sm:w-96 h-auto pb-2 md:w-80 rounded-lg bg-white overflow-hidden mt-2'>
                              <div id='cardImg'  className='h-4/6 relative hover:last:border'>
                                <img src={project.project} alt="" className='w-full h-full object-cover' />
                                <div id='cardCover' className='w-full h-full bg-zinc-800/[.6] absolute top-0 left-0 flex justify-around items-center z-10'>
                                    <a href="" className=''>
                                    <div className='p-2 bg-white drop-shadow-3xl rounded-full text-2xl hover:bg-cyan-400 hover:text-white'>
                                      <RiGithubFill />
                                    </div>
                                    </a>
                                    <a href="" className=''>
                                    <div className='p-2 bg-white drop-shadow-3xl rounded-full text-2xl hover:bg-cyan-400 hover:text-white'>
                                      <RiEyeFill />
                                    </div>
                                    </a>
                                </div>
                              </div>
                               <h2 className='font-semibold capitalize tracking-wider text drop-shadow-3xl m-2 text-start'>{project.name}</h2>
                               <p className='text-justify px-3 mb-1'>{project.desc}</p>
                            </div>
                           ))}
                   </div>
                ))}      
                  </Carousel>
                
              </div>
              </div>
           
 </div>
  )
}

export default Work
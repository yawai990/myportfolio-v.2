import React from 'react';
import {useStateContext} from '../context/Context';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {FaBars} from 'react-icons/fa';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css";

const Home = () => {
  const {currentColor,openSidebar} = useStateContext();

  return (
    <div id='home' className='w-screen h-screen flex dark:text-slate-200 dark:bg-gray-800 relative'>
      <div className='fixed top-8 right-10 z-20 md:hidden'>
      <TooltipComponent content="Menu" position='BottomCenter'>
        <button onClick={openSidebar} style={{color:currentColor}} className='text-xl p-2 rounded-full drop-shadow-xl hover:drop-shadow-3xl bg-white'>
          <FaBars />
        </button>
      </TooltipComponent>
      </div>
            <div className='w-full h-full md:w-2/4 h-full flex justify-center items-start md:items-center'>
              <Zoom bottom>
              <div id="profile" className='w-80 h-80 mt-5 md:mt-0'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className='w-full h-full object-cover object-center' />
              </div>
              </Zoom>
            </div>
            <div className='w-screen h-screen absolute md:relative md:w-2/4 h-full flex flex-col justify-end md:justify-center items-center md:items-start p-2 z-1'>
      <Fade left>
              <AnimationOnScroll animateIn="animate__rubberBand" animateOut='animate__bounceOutRight'>
                    <h1 className='text-4xl font-bold tracking-wide'>
                      <span>Hi</span>
                      , I am Yawai Aung
                    </h1>
              </AnimationOnScroll>
              </Fade>

              <Fade right>
              <AnimationOnScroll delay={1000} initiallyVisible={true} animateIn="animate__rubberBand">
                                  <p style={{color:currentColor}} className='my-3 text-2xl uppercase font-semibold tracking-widest'>front end developer</p>
              </AnimationOnScroll>
              </Fade>

            <Fade bottom>
                          <p className='w-5/6 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur exercitationem adipisci obcaecati magni dignissimos facere repellat voluptatibus autem quibusdam.</p>     
              </Fade>
            </div>
    </div>
  )
}

export default Home
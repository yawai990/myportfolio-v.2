import React from 'react';
import { servicesData } from '../data/data';

const Services = () => {
  return (
    <div className='w-full bg-slate-800 p-2'>

              <p className='text-2xl text-gray-600 text-center mt-3'>This is what can I do for you
              <span className='w-20 m-auto mt-2 border-b border-4 rounded-lg block border-cyan-800'></span>
              </p>
              
              <div className="w-full flex justify-center items-start p-5 mt-4">
                <div className="w-full h-full flex flex-wrap justify-center items-center gap-5 m-auto">
                {servicesData.map(service=>(
                  <div key={service.id} className="w-96 h-60 bg-white drop-shadow rounded-xl">
                    <div className="w-full h-2/5 flex justify-center items-center">
                    <div className='w-20 h-20 p-2 bg-white drop-shadow-xl rounded-full hover:drop-shadow-3xl'>
                      <img src={service.image} alt="" className='w-full h-full object-cover object-center hover:scale-150 duration-150' /> 
                    </div>
                    </div>
                    <div className='p-3'>
                      <h2 className='text-center font-semibold uppercase tracking-wider'>{service.name}</h2>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                ))}
                </div>
              </div>
 </div>
  )
}

export default Services;
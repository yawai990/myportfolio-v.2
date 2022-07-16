import React,{useState} from 'react';
import { useStateContext } from '../context/Context';

const initState={
  name:'',
  email:'',
  message:''
}

const Contact = () => {
  const [sendData,setSendData] = useState(initState);
  const {currentColor} = useStateContext();

  const handleSubmit = (e)=>{
    e.preventDefault()

    console.log(sendData)

    clear()
  };

  const clear =()=>{
    setSendData(initState)
  }

  return (
    <div className='w-full h-auto dark:bg-gray-800 md:h-screen flex flex-col md:flex-row justify-center items-center relative'>

       <div className='md:w-2/4 h-80 w-full h-screen flex flex-col justify-center items-center'>
          <h1 className='text-5xl mb-5 text-gray-600 dark:text-slate-200'>
            <span>Contact</span>
            <br />
            <span className='mt-4 block'><sup>_____</sup>Me</span>
          </h1>

          <p className='w-80 mt-10 text-gray-400 dark:text-slate-100'>It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you should.</p>
         
        </div>

        <div className='md:w-2/4 h-80 w-full h-screen flex justify-center items-center ml-3 mt-5 pt-3 md:mt-0 md:pt-0'>
          <form action="" className='w-10/12 m-auto' onSubmit={handleSubmit}>
              <div className='w-full mb-5'>
                <input type="text" name='name' id='name' style={{borderColor:currentColor}} className='w-10/12 border-b bg-transparent px-2 py-1 focus:outline-none text-white block m-auto' placeholder='Your Name' value={sendData.name} onChange={e=>setSendData({...sendData,[e.target.name]:e.target.value})} />
              </div>
              <div className='w-full mb-5'>
                <input type="text" name='email' id='email' style={{borderColor:currentColor}} className='w-10/12 border-b bg-transparent px-2 py-1 focus:outline-none text-white block m-auto' value={sendData.email} onChange={e=>setSendData({...sendData,[e.target.name]:e.target.value})} placeholder='Your Email' />
              </div>
              <div className='w-full mb-5'>
                <textarea type="text" name='message' id='message' style={{borderColor:currentColor}} className='w-10/12 border-b bg-transparent px-2 py-1 focus:outline-none text-white block m-auto' value={sendData.message} onChange={e=>setSendData({...sendData,[e.target.name]:e.target.value})} placeholder='Your message'/>
              </div>

            <div className="w-full py-5">
                      <button type='submit' style={{
                        borderColor:currentColor
                      }} className='w-10/12 p-2 rounded-lg border text-gray-400 dark:text-white hover:bg-slate-400 hover:text-white block m-auto'>Share Your Feedback</button>
            </div>
          </form>
        </div>

        <footer style={{borderColor:currentColor}} className='w-full md:h-15 md:absolute bottom-0 flex justify-between border-t flex-col md:flex-row'>
          <div style={{borderColor:currentColor}} className='border-b md:border-r md:border-b-0 md:w-3/12'>
            <p className='text-gray-600 text-center'>Call Me</p>
            <a href='tel:+959250364540'  className='text-gray-400 dark:text-slate-200 text-center block'>+9592503644540</a>
          </div>
          <div style={{borderColor:currentColor}} className='border-b md:border-r md:border-b-0 flex-1'>
            <p className='text-gray-600 text-center'>here's our address, come and we'll give your cookes</p>
            <p className='text-gray-400 dark:text-slate-200 text-center'>Insein,Yangon</p>
          </div>
          <div className='px-4 md:w-3/12'>
            <p className='text-gray-600 text-center'>send us mail</p>
            <a href='mailto:yawaiaung.developer@gmail.com' className='text-gray-400 dark:text-slate-200 text-center block break-words'>yawaiaung.developer@gmail.com</a>
          </div>
        </footer>
    </div>
  )
}

export default Contact
import React,{useState} from 'react';

const initState={
  name:'',
  email:'',
  message:''
}

const Contact = () => {
  const [sendData,setSendData] = useState(initState);

  const handleSubmit = (e)=>{
    e.preventDefault()

    console.log(sendData)

    clear()
  };

  const clear =()=>{
    setSendData(initState)
  }

  return (
    <div className='w-full h-auto md:h-screen bg-slate-800 flex flex-col md:flex-row justify-center items-center relative'>

       <div className='md:w-2/4 h-80 w-full h-screen flex flex-col justify-center items-center'>
          <h1 className='text-5xl mb-5 text-slate-200'>
            <span>Contact</span>
            <br />
            <span className='mt-4 block'><sup>_____</sup>Me</span>
          </h1>

          <p className='w-80 mt-10 text-slate-100'>It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you should.</p>
         
        </div>

        <div className='md:w-2/4 h-80 w-full h-screen flex justify-center items-center ml-3 mt-5 pt-3 md:mt-0 md:pt-0'>
          <form action="" className='w-10/12 m-auto' onSubmit={handleSubmit}>
              <div className='w-full mb-5'>
                <input type="text" name='name' id='name' className='w-10/12 border-b bg-transparent px-2 py-1 focus:outline-none text-white block m-auto' placeholder='Your Name' value={sendData.name} onChange={e=>setSendData({...sendData,[e.target.name]:e.target.value})} />
              </div>
              <div className='w-full mb-5'>
                <input type="text" name='email' id='email' className='w-10/12 border-b bg-transparent px-2 py-1 focus:outline-none text-white block m-auto' value={sendData.email} onChange={e=>setSendData({...sendData,[e.target.name]:e.target.value})} placeholder='Your Email' />
              </div>
              <div className='w-full mb-5'>
                <textarea type="text" name='message' id='message' className='w-10/12 border-b bg-transparent px-2 py-1 focus:outline-none text-white block m-auto' value={sendData.message} onChange={e=>setSendData({...sendData,[e.target.name]:e.target.value})} placeholder='Your message'/>
              </div>

            <div className="w-full py-5">
                      <button type='submit' className='w-10/12 p-2 rounded-lg border text-white hover:bg-slate-400 hover:text-white block m-auto'>Share Your Feedback</button>
            </div>
          </form>
        </div>

        <footer className='w-full md:h-15 md:absolute bottom-0 flex justify-between border-t flex-col md:flex-row'>
          <div className='border-b md:border-r md:border-b-0 md:w-3/12'>
            <p className='text-gray-600 text-center'>Call Me</p>
            <a href='tel:+959250364540'  className='text-slate-200 text-center block'>+9592503644540</a>
          </div>
          <div className='border-b md:border-r md:border-b-0 flex-1'>
            <p className='text-gray-600 text-center'>here's our address, come and we'll give your cookes</p>
            <p className='text-slate-200 text-center'>Insein,Yangon</p>
          </div>
          <div className='px-4 md:w-3/12'>
            <p className='text-gray-600 text-center'>send us mail</p>
            <a href='mailto:yawaiaung.developer@gmail.com' className='text-slate-200 text-center block break-words'>yawaiaung.developer@gmail.com</a>
          </div>
        </footer>
    </div>
  )
}

export default Contact
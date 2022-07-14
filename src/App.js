import React from 'react';
import {AiFillSetting} from 'react-icons/ai';
import {Home,Contact,About,Work,Services, Navbar,ThemeSetting} from './components';
import { Tooltip, TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from './context/Context';
import { Input } from 'postcss';

const App = () => {
    const {currentColor,theme,setTheme,currentMode } = useStateContext();


  return (
                <div className={`${currentMode === 'dark' && 'dark'}`}>
                  <div className='dark:bg-main-dark-bg'>

       
                {theme && <ThemeSetting /> }
                  <div className={`w-10 h-10 flex justify-center items-center fixed top-5 right-5 p-2 bg-white drop-shadow-xl hover:drop-shadow-3xl rounded-full`}>
                    <TooltipComponent content='Setting' position='LeftCenter'>
                        <button onClick={setTheme} style={{color:currentColor}} className='text-3xl flex justify-center items-center'>
                          <AiFillSetting />
                        </button>
                    </TooltipComponent>
                  </div>    
                    <Navbar />
                    <Home />
                    <About />
                    <Work />
                    <Services />
                    <Contact />
                    </div>
                </div>
  )
}

export default App;
import React from 'react';
import {AiFillSetting} from 'react-icons/ai';
import {Home,Contact,About,Work,Services, Navbar,ThemeSetting} from './components';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from './context/Context';

const App = () => {
    const {currentColor,theme,setTheme,currentMode } = useStateContext();


  return (
                <div className={`${currentMode === 'dark' && 'dark'}`}>
                  <div className='w-screen h-screen dark:bg-main-dark-bg overflow-x-hidden'>

       
                {theme && <ThemeSetting /> }
                  <div style={{backgroundColor:currentColor}} className={`w-10 h-10 flex justify-center items-center fixed bottom-5 right-5 p-2 text-white drop-shadow-2xl hover:drop-shadow-3xl rounded-full z-48`}>
                    <TooltipComponent content='Setting' position='LeftCenter'>
                        <button onClick={setTheme} className='text-3xl flex justify-center items-center'>
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
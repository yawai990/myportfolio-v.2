import React from 'react';
import {AiFillSetting} from 'react-icons/ai';
import {Home,Contact,About,Work,Services,Sidebar, Navbar,ThemeSetting} from './components';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from './context/Context';

const App = () => {
    const {currentColor,theme,setTheme,currentMode,sidebar } = useStateContext();

  return (
                <div className={`${currentMode === 'dark' && 'dark'}`}>
                  <div className='w-screen h-screen dark:bg-main-dark-bg overflow-x-hidden scroll-smooth'>

                {sidebar && <Sidebar />}
                {theme && <ThemeSetting /> }
                  <div style={{backgroundColor:currentColor}} className={`w-10 h-10 flex justify-center items-center fixed bottom-10 right-10 p-2 text-white drop-shadow-2xl hover:drop-shadow-3xl rounded-full z-50`}>
                    <TooltipComponent content='Setting' position='BottomCenter'>
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
import React from 'react';
import {AiFillSetting} from 'react-icons/ai';
import {Home,Contact,About,Work,Services, Navbar} from './components';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const App = () => {
    const themeColor ='red';
    const activeMenu = false;

  return (
                <div>
                    <Navbar />
                    <Home />
                    <About />
                    <Work />
                    <Services />
                    <Contact />
                </div>
  )
}

export default App;
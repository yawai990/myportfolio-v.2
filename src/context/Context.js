import React,{useState,createContext,useContext} from 'react';

const myContext = createContext();

export const ContextProvider = ({children})=>{
    const [theme,setThemeSetting] = useState(false);
    const [currentColor,setcurrentColor] = useState('#1A97F5');
    const [currentMode,setcurrentMode] = useState('light')

    const setTheme=()=>{
        setThemeSetting(prev=>!prev)
    }
      const setMode =(e)=>{
        setcurrentMode(e.target.value)
        setThemeSetting(false)
    };

    const setColor =(e)=>{
        setcurrentColor(e)
        setThemeSetting(false)
    }

    return <myContext.Provider value={{
            currentColor,setcurrentColor,setMode,currentMode,
            setColor,theme,setTheme
    }}>
        {children}
    </myContext.Provider>
};

export const useStateContext =()=>useContext(myContext);
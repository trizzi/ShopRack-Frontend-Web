import React, {useContext, createContext, useState} from 'react';

export const ThemeContext = createContext();
export const useTheme = ()=> useContext(ThemeContext)

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState({
        primary:{
            light: '#ff8f68',
            normal:'#f97547',
            dark:'#f15a25',
            darker:'#d24d21'
        },
        secondary:{
            light:'#0c49a6',
            normal:'#012595',
            dark:'#2a2a65'
        },
        textcolor:{
            light: '#ffffff'
        },
        transparent: 'transparent',
        current: 'inherit',
    })
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

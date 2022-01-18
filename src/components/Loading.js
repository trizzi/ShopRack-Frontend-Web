import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Loading() {
    const {theme} = useTheme();
    return (
        <div className="container mx-auto flex items-center justify-center overflow-hidden h-screen">
            <div className="h-40 w-40 rounded-full relative flex items-center justify-center" 
                style={{backgroundColor:theme.primary.light}}>
                <div className="h-36 w-36 bg-white relative rounded-full animate-spin">
                    <div className="h-36 w-60 bg-white -mt-10 -ml-10"></div>
                </div>
            </div>
        </div>
    )
}

export default Loading

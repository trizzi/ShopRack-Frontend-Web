import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Button = ({ text, background, size,refs,disable}) => {
  const {theme} = useTheme();

  return (
    <button 
      className={`rounded-full py-2 lg:py-2 px-5 whitespace-nowrap 
        ${size && size} ${disable && "opacity-40"}`
      }
      style={{
        backgroundColor:`${background ? theme.primary.normal : theme.transparent}`,
        color:`${background ? theme.textcolor.light : theme.current}`,
        border: "2px solid " + theme.primary.normal
      }}
      ref={refs}
      disabled={disable}
    >
      {text}
    </button>
  );
};

export default Button;

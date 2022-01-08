import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Button = ({ text, background, size}) => {
  const {theme} = useTheme();

  return (
    <button 
      className={`rounded-full md:py-1 lg:py-2 px-5 whitespace-nowrap ${size && size}`}
      style={{
        backgroundColor:`${background ? theme.primary.normal : theme.transparent}`,
        color:`${background ? theme.textcolor.light : theme.current}`,
        border: "2px solid " + theme.primary.normal
      }}
    >
      {text}
    </button>
  );
};

export default Button;

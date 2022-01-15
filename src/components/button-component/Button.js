import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from "framer-motion";

const Button = ({ time,text, background, size,refs,disable}) => {
  const {theme} = useTheme();

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.button 
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

      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ delay: time || 2}}
    >
      {text}
    </motion.button>
  );
};

export default Button;

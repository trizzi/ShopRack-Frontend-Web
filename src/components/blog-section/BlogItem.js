import React from 'react';
import { Link } from 'react-router-dom';
import {useTheme} from '../../context/ThemeContext';
import { AiOutlineArrowRight } from "react-icons/ai";


const BlogItem = ({ blog: { image, name, text } }) => {
  const {theme} = useTheme();

  return (
    <div className='w-full md:w-2/5 lg:w-1/4 rounded-xl overflow-hidden shadow-xl'>
      <img src={image} alt='' className="w-full" />

      <div className="p-5 xl:px-10">
        <h3 className="font-bold text-xl py-5">{name}</h3>
        <p>{text}</p>

        <span className="whitespace-nowrap flex items-center pt-5" style={{color: theme.primary.normal}}>
        <Link to="#">
          Read more&nbsp;
        </Link>
        <AiOutlineArrowRight />
        </span>
      </div>
    </div>
  );
};

export default BlogItem;

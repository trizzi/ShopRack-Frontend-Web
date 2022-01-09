import React from 'react';
import Button from './button-component/Button';
import { Link } from 'react-router-dom';
import {useTheme} from '../context/ThemeContext';

const Navbar = () => {
  const {theme} = useTheme();
  return (
    <nav
      role='navigation'
      style={{color:theme.textcolor.dark}}
    >
      <div
        className='flex justify-between items-center min-h-0 relative shadow-sm font-mulish'
      >
        <Link to='#' className='pl-2 shrink-0'>
          <img
            className='w-48 p-2'
            src='/img/logo.svg'
            alt='Logo'
          />
        </Link>
        <div className='px-8 cursor-pointer md:hidden'>
          <i className='fas fa-bars'></i>
        </div>
        <div className='pr-8 md:flex hidden space-x-5 lg:space-x-16 items-center'>
          <Link  to='#'>
            FAQs
          </Link>
          <Link to='#' className='whitespace-nowrap'>
            CONTACT US
          </Link>
          <Link to='#' >
            BLOG
          </Link>
          <Link to='#' >
            ABOUT
          </Link>

          <Button
            text='GET STARTED'
            background
          />

          <Button
            text='LOGIN'
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

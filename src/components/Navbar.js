import React from 'react';
import Button from './button-component/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-
      mulish'
      role='navigation'>
      <Link to='#' className='pl-2'>
        <img
          className='w-25 h-20 p-2'
          src='/img/logo.svg'
          alt='Logo'
        />
      </Link>
      <div className='px-8 cursor-pointer md:hidden'>
        <i className='fas fa-bars'></i>
      </div>
      <div className='pr-8 md:block hidden'>
        <Link className='p-4' to='#'>
          FAQs
        </Link>
        <Link to='#' className='p-4'>
          CONTACT US
        </Link>
        <Link to='#' className='p-4'>
          BLOG
        </Link>
        <Link to='#' className='p-4'>
          ABOUT
        </Link>
        <Button
          className='py-6 px-10 border bg-orange-600 border-orange-600 hover:border-orange-400 ...'
          text='GET STARTED'
        />

        <Button
          className='py-6 px-10 border border-orange-600 hover:border-orange-400 ...  '
          text='LOGIN'
        />
      </div>
    </nav>
  );
};

export default Navbar;

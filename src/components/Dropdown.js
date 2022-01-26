import React from 'react';
import Button from './button-component/Button';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center'
          : 'hidden'
      }
      onClick={toggle}>
      <Link to='/' className='p-4 border-b-2'>
        HOME
      </Link>
      <Link
        to='/contactus'
        className='whitespace-nowrap p-4 border-b-2'>
        CONTACT US
      </Link>
      <Link to='#' className='p-4 border-b-2'>
        BLOG
      </Link>
      <Link to='#' className='p-4 border-b-2'>
        ABOUT
      </Link>

      <Link to='/signup' className='p-4 border-b-2'>
        <Button text='GET STARTED' background />
      </Link>

      <Link to='/signin' className='p-4 border-b-2'>
        <Button text='LOGIN' />
      </Link>
    </div>
  );
};

export default Dropdown;

import React from 'react';
import Button from './button-component/Button';

import { useTheme } from '../context/ThemeContext';

const Showcase = () => {
  const { theme } = useTheme();

  return (
    <div className='relative overflow-hidden'>
      <div
        className='absolute top-0 rounded-full left-3/4 ml-60 z-10'
        style={{
          backgroundColor: theme.primary.normal,
          width: '50%',
          paddingBottom: '50%',
        }}></div>
      <div
        className='container z-20 relative mx-auto md:px-20 md:flex md:justify-around md:items-center font-mulish'
        style={{ color: theme.textcolor.dark }}>
        <div className='flex flex-col w-full md:w-1/2 px-10 sm:px-1 md:pr-20 pt-20'>
          <h1 className='text-3xl md:text-3xl xl:text-5xl font-bold w-full lg:w-4/5 py-5 md:py-1'>
            Smartest way to meet your online retailing needs
            with ease and speed
          </h1>
          <p className='md:text-xl pt-3 py-10'>
            ShopRacks is a software designed to efficiently
            document, track and manage inventories, orders
            and deliveries for online store owners.
          </p>
          <p>
            <Button
              text='GET STARTED'
              size='min-w-0'
              background
            />
          </p>
        </div>

        <div className='w-full md:w-1/2 pt-20'>
          <img
            //   className='w-100 h-100 p-6'
            src='/img/pic-1.svg'
            alt='Showcase-img'
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;

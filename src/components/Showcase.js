import React from 'react';
import Button from './button-component/Button';

const Showcase = () => {
  return (
    <div
      className='container mx-auto py-8 flex justify-around items-center font-
    mulish'>
      <div>
        <h1>
          Smartest way to meet your online retailing needs
          with ease and speed
        </h1>
        <p>
          ShopRacks is a software designed to efficiently
          document, track and manage inventories, orders and
          deliveries for online store owners.
        </p>
        <Button text='GET STARTED' />
      </div>
      <div>
        <img
          //   className='w-100 h-100 p-6'
          src='/img/pic-1.svg'
          alt='Showcase-img'
        />
      </div>
    </div>
  );
};

export default Showcase;

import React from 'react';
import Button from '../button-component/Button';

const Signin = () => {
  return (
    <div className='h-screen flex justify-between items-center'>
      <div className='bg-secondary-100 flex flex-col justify-center items-center w-2/4 px-10 '>
        <div>
          <img src='' alt='' />
        </div>
        <p className='px-10 pb-5'>
          ShopRacks, as a business solution leverages on
          technology to facilitate the core aspect of your
          online store. We provides a platform for you to
          easily document, send and track invoices. You can
          also manage and track inventories, orders and
          deliveries seemlessly
        </p>
        <p>Shopracks, Nigeria</p>
        <p className='py-10'>OTHER FINANCE PRODUCTS</p>
        <div className='flex justify-around pt-12'>
          <p>Shopracks Subscriptions</p>
          <p>Shopracks Expenses</p>
        </div>
      </div>
      <div className='flex justify-center items-center w-2/4 px-8 '>
        <img src='' alt='' />
        <form action='' className='flex flex-col'>
          <div>
            <input
              type='text'
              placeholder='Email Address'
            />
          </div>
          <div>
            <input type='text' placeholder='Password' />
          </div>

          <Button text='SIGN IN' background />
          <p className='px-7 py-3'>
            Already have a Shopracks account?
            <span>Sign Up</span>
          </p>
          <p className='text-center py-7'>
            Forgot Password??
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;

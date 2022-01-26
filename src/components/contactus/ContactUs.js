import React from 'react';
import Navbar from '../../components/nav-seection/Navbar';
import Button from '../../components/button-component/Button';
import Dropdown from '../../components/nav-seection/Dropdown';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/footer-section/Footer';

const ContactUs = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Navbar />
      <Dropdown />
      <div className='py-14 px-28'>
        <h1 className='text-center text-3xl md:text-3xl xl:text-5xl font-bold w-full  '>
          Contact US
        </h1>
        <p className='text-center relative md:text-xl pt-3 '>
          Thanks for checking oot our page. You can send us
          an email and we would get back to you as soon as
          possible.
        </p>
      </div>
      <div className='relative flex flex-col justify-center items-center w-full px-8 '>
        <h3>Please fill out this form to contact us</h3>
        <form
          action=''
          // onSubmit={onSubmit}
          className='flex flex-col w-full'>
          <div>
            <input
              type='text'
              placeholder='First Name'
              // name='firstname'
              // value={firstname}
              // onChange={onChange}
              // required
              className='p-4 mt-5 focus:border-2 rounded-full outline-none w-full'
              style={{
                border: `1px solid ${theme.primary.dark}`,
              }}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Last Name'
              // name='lastname'
              // value={lastname}
              // onChange={onChange}
              // required
              className='p-4 mt-5 focus:border-2 rounded-full  w-full'
              style={{
                border: `1px solid ${theme.primary.dark}`,
              }}
            />
          </div>
          <div>
            <input
              type='email'
              placeholder='Email Address'
              // name='email'
              // value={email}
              // onChange={onChange}
              // required
              className='p-4 mt-5 focus:border-2 rounded-full  w-full'
              style={{
                border: `1px solid ${theme.primary.dark}`,
              }}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Phone Number'
              // name='phonenumber'
              // value={text}
              // onChange={onChange}
              // required
              className=' p-4 mt-5 focus:border-2 rounded-full  w-full'
              style={{
                border: `1px solid ${theme.primary.dark}`,
              }}
            />
          </div>

          <div>
            <input
              type='message'
              placeholder='Message'
              className=' p-4 mt-5 mb-5 focus:border-2 rounded-full w-full'
              style={{
                border: `1px solid ${theme.primary.dark}`,
              }}
              // name='message'
              // value={password}
              // onChange={onChange}
              // required
            />
          </div>

          <Button text='SIGN UP' background type='submit' />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;

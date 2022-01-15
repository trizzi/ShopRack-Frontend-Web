import React from 'react';
import Button from './button-component/Button';

import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Showcase = () => {
  const { theme } = useTheme();

  return (
    <div className='relative'>
      <div
        className='absolute top-0 left-3/4 ml-20 lg:ml-52 rounded-full z-10'
        style={{
          backgroundColor: theme.primary.normal,
          width: '50%',
          paddingBottom: '50%',
        }}></div>
    
    <div className="relative">
      <div 
        className="absolute top-0 left-3/4 ml-20 lg:ml-52 rounded-full z-10" 
        style={{backgroundColor:theme.primary.normal, width:"50%",paddingBottom:"50%"}}
      >
      </div>

      <div className="absolute md:bottom-20 md:left-0 left-0 -ml-10 md:ml-0">
        <svg width="60" height="327" viewBox="0 0 90 327" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-13.2281 16.379L17.1273 16.5804M1.84422 32.3629L2.05501 0.596492L1.84422 32.3629Z" stroke="#012595" strokeMiterlimit="10"/>
          <path d="M59.1577 16.8593L89.513 17.0608M74.23 32.8432L74.4407 1.07684L74.23 32.8432Z" stroke="#012595" strokeMiterlimit="10"/>
          <path d="M-13.2281 16.379L17.1273 16.5804M1.84422 32.3629L2.05501 0.596492L1.84422 32.3629Z" stroke="#F15A25" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M59.1577 16.8593L89.513 17.0608M74.23 32.8432L74.4407 1.07684L74.23 32.8432Z" stroke="#F15A25" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M-13.7145 89.6857L16.6408 89.8871M1.35777 105.669L1.56856 73.9034L1.35777 105.669Z" stroke="#012595" strokeMiterlimit="10"/>
          <path d="M58.6712 90.166L89.0266 90.3675M73.7435 106.15L73.9543 74.3837L73.7435 106.15Z" stroke="#012595" strokeMiterlimit="10"/>
          <path d="M-13.7145 89.6857L16.6408 89.8871M1.35777 105.669L1.56856 73.9034L1.35777 105.669Z" stroke="#F15A25" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M58.6712 90.166L89.0266 90.3675M73.7435 106.15L73.9543 74.3837L73.7435 106.15Z" stroke="#F15A25" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M-14.2009 162.992L16.1544 163.194M0.871378 178.976L1.08217 147.21L0.871378 178.976Z" stroke="#012595" strokeMiterlimit="10"/>
          <path d="M58.1849 163.472L88.5402 163.674M73.2571 179.456L73.4679 147.69L73.2571 179.456Z" stroke="#012595" strokeMiterlimit="10"/>
          <path d="M-14.2009 162.992L16.1544 163.194M0.871378 178.976L1.08217 147.21L0.871378 178.976Z" stroke="#F15A25" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M58.1849 163.472L88.5402 163.674M73.2571 179.456L73.4679 147.69L73.2571 179.456Z" stroke="#F15A25" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M-14.6873 236.299L15.668 236.5M0.384927 252.283L0.595716 220.517L0.384927 252.283Z" stroke="#012595" strokeMiterlimit="10"/>
          <path d="M57.6984 236.779L88.0537 236.981M72.7707 252.763L72.9815 220.997L72.7707 252.763Z" stroke="#012595" strokeMiterlimit="10"/>
          <path d="M-14.6873 236.299L15.668 236.5M0.384927 252.283L0.595716 220.517L0.384927 252.283Z" stroke="#F15A25" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M57.6984 236.779L88.0537 236.981M72.7707 252.763L72.9815 220.997L72.7707 252.763Z" stroke="#F15A25" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M-15.1738 309.606L15.1815 309.807M-0.101524 325.59L0.109265 293.823L-0.101524 325.59Z" stroke="#012595" strokeMiterlimit="10"/>
          <path d="M57.212 310.086L87.5673 310.287M72.2842 326.07L72.495 294.303L72.2842 326.07Z" stroke="#012595" strokeMiterlimit="10"/>
          <path d="M-15.1738 309.606L15.1815 309.807M-0.101524 325.59L0.109265 293.823L-0.101524 325.59Z" stroke="#F15A25" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M57.212 310.086L87.5673 310.287M72.2842 326.07L72.495 294.303L72.2842 326.07Z" stroke="#F15A25" strokeWidth="2" strokeMiterlimit="10"/>

        </svg>
      </div>
      <div
        className='container z-20 relative p-4 mx-auto md:px-20 md:flex md:justify-around md:items-center font-mulish'
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
            <Link to="/signup">
              <Button text='GET STARTED' size='min-w-0' background />
            </Link>
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

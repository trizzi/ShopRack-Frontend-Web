import React from "react";
import { useTheme } from "../../context/ThemeContext";
import FooterlistItem from "./FooterlistItem";
import footerItems from './footerlinks.json';

import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillMediumCircle, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    const { theme } = useTheme(); // Get theme colors

    return (
        <footer className="py-20 min-h-0 w-full mt-20" style={{backgroundColor:theme.primary.normal}}>
            <div className="flex container mx-auto md:p-12">
                <div className="w-full md:w-1/3 flex flex-col">
                    <div className='w-full min-h-0 flex items-center space-x-2'>
                        <img 
                            src="/img/logo.svg"
                            className="w-12 h-12 rounded-full bg-white"
                            alt="logo"
                        />
                        <h2 className='text-4xl font-bold text-white my-5'>
                            ShopRacks
                        </h2>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since
                    </p>
                    <small className='mt-6'>
                        &copy; ShopRacks LTD 2022. All rights reserved
                    </small>
                    <div className="flex space-x-2 pt-2" style={{color:theme.textcolor.light}}>
                        <a href='/page'> <FaTwitter size={30} /> </a> 
                        <a href='/page'><FaFacebook size={30} /></a> 
                        <a href='/page'><AiFillMediumCircle size={30} /></a> 
                        <a href='/page'><AiFillInstagram size={30} /></a> 
                        <a href='/page'><FaLinkedin size={30} /></a> 
                    </div>
                </div>

                <div className="flex w-full md:w-2/3" style={{color:theme.textcolor.light}}>
                    {footerItems && footerItems.map((category)=>(
                        <div className="w-full sm:w-1/2 md:w-1/3 flex justify-end" key={category.title}>
                            <FooterlistItem category={category} />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
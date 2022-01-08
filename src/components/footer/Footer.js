import React from "react";
import links from './footer.json'
import { useTheme } from "../../context/ThemeContext";
import Footerlinks from "./footerlinks";

const Footer = () => {
    const { theme } = useTheme(); // Get theme colors

    return (
        <Footer className="py-20 h-96 w-full mt-20" style={{backgroundColor:theme.primary.normal}}>
            <div className="container mx-auto">
                <div className="w-full md:w-1/3 flex flex-col">
                    <div className='w-full min-h-0 flex'>
                        <img 
                            src="/img/logo.svg"
                            className="w-20 h-20 rounded-full bg-white"
                            alt="logo"
                        />
                        <h2 className='text-2xl font-black text-white'>ShopRacks</h2>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    </p>
                    <small>
                        &copy; ShopRacks LTD 2022. All rights reserved
                    </small>
                    <div className="flex">
                        <a href='/page'><i className='fas fas-facebook'></i></a> 
                        <a href='/page'><i className='fas fas-twitter'></i></a> 
                        <a href='/page'><i className='fas fas-instagram'></i></a> 
                        <a href='/page'><i className='fas fas-linkedin'></i></a> 
                    </div>
                </div>

                <div className="flex w-full md:w-2/3">
                    {links.map((category)=>(
                        <Footerlinks category={category} key={category.title} />
                    ))}
                </div>
            </div>
        </Footer>
    );
};

export default Footer;

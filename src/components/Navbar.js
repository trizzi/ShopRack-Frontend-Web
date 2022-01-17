import React,{useEffect,useRef, useCallback} from 'react';
import Button from './button-component/Button';
import { Link, useNavigate} from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import SlideDown from './animations/SlideDown';
import { useAuth } from '../context/AuthUserContext';

const Navbar = ({ toggle }) => {
  const { theme } = useTheme();
  const {authUser, logout} = useAuth();

  const navigate = useNavigate();

  const logoutButton = useRef(null)

  const handler = useCallback((e)=>{
    e.preventDefault();
    if(authUser?.email){
      logout()
      navigate("/")
    }else{
      navigate("/signin")
    }
  },[authUser,logout,navigate])

  useEffect(()=>{
    const button = logoutButton.current
    button.addEventListener("click",handler)

    return ()=>{
      if(button !== null){
        button.removeEventListener("click",handler);
      }  
    }
  },[handler])

  return (
    <nav
      role='navigation'
      style={{ color: theme.textcolor.dark }}>
      <SlideDown className='flex justify-between items-center min-h-0 relative shadow-sm font-mulish container mx-auto'>
        <Link to='#' className='pl-2 shrink-0'>
          <img
            className='w-48 p-2'
            src='/img/logo.svg'
            alt='Logo'
          />
        </Link>
        <div
          className='px-8 cursor-pointer md:hidden'
          onClick={toggle}>
          <i className='fas fa-bars'></i>
        </div>
        <div className='pr-8 md:flex hidden space-x-5 lg:space-x-16 items-center'>
          <Link to='#'>FAQs</Link>
          <Link to='#' className='whitespace-nowrap'>
            CONTACT US
          </Link>
          <a href='https://dev-shopracks.pantheonsite.io'>BLOG</a>
          <Link to='#'>ABOUT</Link>

          <Link to='/signup'>
            <Button text='GET STARTED' background />
          </Link>

          <Link to='/signin'>
            <Button text={authUser?.email ? 'LOGOUT' : 'LOGIN'} refs={logoutButton} />
          </Link>
        </div>
      </SlideDown>
    </nav>
  );
};

export default Navbar;

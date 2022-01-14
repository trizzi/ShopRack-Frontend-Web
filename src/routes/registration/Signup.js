import React,{useState, useEffect, useRef} from 'react';
import Button from '../../components/button-component/Button';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false)

  const signup = useRef(null);

  const signupHandler = (e)=>{
    e.preventDefault();
    setLoading(true);
  }

  useEffect(()=>{
    const button = signup.current
    button.addEventListener("click",signupHandler)

    return ()=>{
      if(button !== null){
        button.removeEventListener("click",signupHandler);
      }  
      setLoading(false)
    }
  },[])

  return (
    <div className='h-screen flex justify-between items-center'>
      <div
        style={{
          background: theme.secondary.light,
          color: theme.textcolor.light,
        }}
        className='hidden md:flex w-2/4 h-screen  flex-col justify-center items-center'>
        {/* <div className=' pl-0'>
          <img src='/img/shoprack-inventory.svg' alt='' />
        </div> */}
        <div className='  px-10 pt-32 '>
          <div className='pl-64'>
            <img src='/img/white-quotes.svg' alt='' />
          </div>
          <div className='px-20'>
            <p className='pt-14 pb-5'>
              ShopRacks, as a business solution leverages on
              technology to facilitate the core aspect of
              your online store. We provides a platform for
              you to easily document, send and track
              invoices. You can also manage and track
              inventories, orders and deliveries seemlessly
            </p>
            <p className='pb-5 pl-36'>Shopracks, Nigeria</p>
            <p className='pt-48 pl-28'>
              OTHER FINANCE PRODUCTS
            </p>
            <div className='flex justify-around pt-8'>
              <p>Shopracks Subscriptions</p>
              <p>Shopracks Expenses</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center w-full md:w-2/4 px-8 '>
        <div className='pb-5'>
          <img src='/img/shoprack-logo.svg' alt='' />
        </div>
        <form action='' className='flex flex-col'>
          <div
            className='p-4 rounded-full'
            style={{
              border: `1px solid ${theme.primary.dark}`,
            }}>
            <input type='text' placeholder='Company Name' />
          </div>
          <div
            className='p-4 rounded-full mt-5'
            style={{
              border: `1px solid ${theme.primary.dark}`,
            }}>
            <input
              type='text'
              placeholder='Email Address'
            />
          </div>
          <div
            className='p-4 rounded-full mt-5'
            style={{
              border: `1px solid ${theme.primary.dark}`,
            }}>
            <input type='text' placeholder='Password' />
          </div>
          <div
            className='p-4 rounded-full mt-5'
            style={{
              border: `1px solid ${theme.primary.dark}`,
            }}>
            <input type='text' placeholder='Phone Number' />
          </div>
          <div className='flex justify-around items-center py-5'>
            <input type='checkbox' />
            <p className='pl-2'>
              I agree to the Terms of Service and Privacy
              Policy.
            </p>
          </div>

          <Button 
            text={loading ? 'Loading...' : 'SIGN UP'} 
            background
            disable={loading}
            refs={signup}
          />

          <p className='px-7 py-3'>
            Already have a Shopracks account?
            <Link
              to='/signin'
              style={{
                color: theme.primary.dark,
              }}>
              &nbsp; Sign In
            </Link>
          </p>
          <p className='text-center py-7'>
            Forgot Password??
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

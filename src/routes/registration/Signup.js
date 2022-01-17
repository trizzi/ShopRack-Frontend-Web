import React,{useEffect, useRef, useCallback} from 'react';
import Button from '../../components/button-component/Button';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthUserContext';

const Signup = () => {
  const { theme } = useTheme();
  const { loading,message,dispatch,registerUser} = useAuth();

  const fname = useRef(null);
  const lname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const signup = useRef(null);

  const signupHandler = useCallback((e)=>{
    e.preventDefault();

    registerUser(
      fname.current.value, 
      lname.current.value,
      email.current.value,
      password.current.value
    )
  },[fname,lname,email,password, registerUser])

  useEffect(()=>{
    const button = signup.current
    button.addEventListener("click",signupHandler)

    return ()=>{
      if(button !== null){
        button.removeEventListener("click",signupHandler);
      }  
    }
  },[signupHandler])

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
        <div className='px-10 pt-32 '>
          <div className='px-20'>
            <img src='/img/white-quotes.svg' alt='' />
          </div>
          <div className='px-20'>
            <p className='pt-14 pb-5 text-center'>
              ShopRacks, as a business solution leverages on
              technology to facilitate the core aspect of
              your online store. We provides a platform for
              you to easily document, send and track
              invoices. You can also manage and track
              inventories, orders and deliveries seemlessly
            </p>
            <p className='pb-5 text-center'>Shopracks, Nigeria</p>
            <p className='pt-48 text-center'>
              OTHER FINANCE PRODUCTS
            </p>
            <div className='flex justify-between pt-8'>
              <p>Shopracks Subscriptions</p>
              <p>Shopracks Expenses</p>
            </div>
          </div>
        </div>
      </div>

      <div className='relative flex flex-col justify-center items-center w-full md:w-2/4 px-8 '>
      
        {message?.success && (
          <p className="bg-green-600 text-white p-10 absolute top-0 -mt-20 w-full text-center">
            {message.success}
          </p>
        )}
        
        <div className='pb-5'>
          <img src='/img/shoprack-logo.svg' alt='' />
        </div>
        <form action='' className='flex flex-col'>
          <div>
            <input 
              type='text' 
              placeholder='First Name..' 
              ref={fname} 
              className='p-4 rounded-full outline-none w-full'
              style={{
                border: `1px solid ${theme.primary.dark}`,
              }}
            />
          </div>
          <div class="relative flex flex-col">
            <input 
              type='text' 
              placeholder='Enter email'
              ref={lname} 
              className='p-4 mt-5 rounded-full outline-none w-full pear placeholder:'
              style={{
                border: `1px solid ${theme.primary.dark}`,
              }}
            />
            <label htmlFor='name' className="absolute top-10 left-4 pear-placeholder-shown:text-white" >
              Last Name
            </label>
          </div>
          <div>
            <input
              type='email'
              placeholder={message?.emailError ? message.emailError : "Email Address"}
              ref={email}
              className={`
                  p-4 mt-5 focus:border-2 rounded-full w-full focus:outline-none
                  ${message?.emailError.length > 0 ? "invalid:border-pink-500 invalid:text-pink-600": ""}
              `}
              onFocus={()=>dispatch({type:"emailError",payload:""})}
              style={{
                border: `1px solid ${theme.primary.dark}`,
              }}
            />
          </div>
          <div>
            <input 
              type='password' 
              placeholder={message?.passwordError ? message.passwordError : "Password"}
              ref={password}
              onFocus={()=>dispatch({type:"passwordError",payload:""})}
              className={
                `
                  p-4 mt-5 focus:border-2 rounded-full w-full
                  ${message?.passwordError ? "text-red-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500": "outline-none"}
                `
              }
              style={{
                border: `1px solid ${theme.primary.dark}`,
              }}
            />
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

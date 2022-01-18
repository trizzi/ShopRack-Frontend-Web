import React, { useState, Suspense} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { AuthUserContextProvider } from './context/AuthUserContext';
import Loading from './components/Loading';

const AppDownload = React.lazy(()=> import('./components/AppDownload'));
const Blog = React.lazy(()=> import('./components/blog-section/Blog'));
const CustomerReview = React.lazy(()=> import('./components/customer-review/CustomerReview'));
const Footer = React.lazy(()=> import('./components/footerSection/Footer'));
const Navbar = React.lazy(()=> import('./components/Navbar'));
const Dropdown = React.lazy(()=> import('./components/Dropdown'));
const Services = React.lazy(()=> import('./components/services/Services'));
const Showcase = React.lazy(()=> import('./components/Showcase'));
const Dashboard = React.lazy(()=> import('./routes/Dashboard'));
const AuthCheck = React.lazy(()=> import('./HOC/AuthCheck'));

const Signin = React.lazy(()=> import('./routes/registration/Signin'));
const Signup = React.lazy(()=> import('./routes/registration/Signup'));

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const {theme} = useTheme()

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AuthUserContextProvider>
        <div className='overflow-x-hidden' style={{color:theme.textcolor.dark}}>
          <Router>
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <Suspense fallback={<Loading />}>
                    <>
                      <Navbar toggle={toggle} />
                      <Dropdown
                        isOpen={isOpen}
                        toggle={toggle}
                      />
                      <Showcase />
                      <Services />
                      <AppDownload />
                      <CustomerReview />
                      <Blog />
                      <Footer />
                    </> 
                  </Suspense>
                }
              />
              <Route
                exact
                path='/signin'
                element={
                  <Suspense fallback={<Loading />}>
                    <Signin />
                  </Suspense>
                }
              />
              <Route
                exact
                path='/signup'
                element={
                  <Suspense fallback={<Loading />}>
                    <Signup />
                  </Suspense>
                }
              />
              <Route 
                exact
                path="/dashboard" 
                element={
                  <Suspense fallback={<Loading />}>
                    <AuthCheck component={Dashboard} />
                  </Suspense>
                } 
              />
              <Route
                path="*"
                element={
                  <main className="flex flex-col h-screen items-center justify-center container text-red-400 font-black">
                    <h1 className="text-4xl">404! Not found</h1>
                    <p className="text-2xl">Check the url! Are you sure you are not lost?</p>
                  </main>
                }
              />
            </Routes>
          </Router>
        </div>
    </AuthUserContextProvider>
  );
}

export default App;

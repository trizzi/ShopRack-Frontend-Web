import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import AppDownload from './components/AppDownload';
import Blog from './components/blog-section/Blog';
import CustomerReview from './components/customer-review/CustomerReview';
import Footer from './components/footerSection/Footer';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Services from './components/services/Services';
import Showcase from './components/Showcase';
import Signin from './routes/registration/Signin';
import Signup from './routes/registration/Signup';
import { ThemeContextProvider } from './context/ThemeContext';
import { AuthUserContextProvider } from './context/AuthUserContext';
import Dashboard from './routes/Dashboard';
import AuthCheck from './HOC/AuthCheck';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AuthUserContextProvider>
      <ThemeContextProvider>
        <div className='overflow-x-hidden'>
          <Router>
            <Routes>
              <Route
                exact
                path='/'
                element={
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
                }
              />
              <Route
                exact
                path='/signin'
                element={<Signin />}
              />
              <Route
                exact
                path='/signup'
                element={<Signup />}
              />
              <Route 
                exact
                path="/dashboard" 
                element={<AuthCheck component={Dashboard} />} 
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
      </ThemeContextProvider>
    </AuthUserContextProvider>
  );
}

export default App;

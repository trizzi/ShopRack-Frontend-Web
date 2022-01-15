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
import Signin from './components/registration/Signin';
import Signup from './components/registration/Signup';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
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
          </Routes>
        </Router>
      </div>
    </ThemeContextProvider>
  );
}

export default App;

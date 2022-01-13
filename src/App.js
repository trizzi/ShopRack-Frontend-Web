import React from 'react';
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
import Services from './components/services/Services';
import Showcase from './components/Showcase';
import Signin from './components/registration/Signin';
import Signup from './components/registration/Signup';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>

     <div className="overflow-x-hidden">
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Navbar />
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

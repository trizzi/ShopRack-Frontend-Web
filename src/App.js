import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppDownload from './components/AppDownload';
import Blog from './components/blog-section/Blog';
import CustomerReview from './components/customer-review/CustomerReview';
import Footer from './components/footerSection/Footer';
import Navbar from './components/Navbar';
import Services from './components/services/Services';
import Showcase from './components/Showcase';
import { ThemeContextProvider } from './context/ThemeContext';


function App() {
  return (
    <ThemeContextProvider>
      <div className="overflow-x-hidden">
        <Router>
          <>
            <Navbar />
            <Showcase />
            <Services />
            <AppDownload />
            <CustomerReview />
            <Blog />
            <Footer />
          </>
        </Router>
      </div>
    </ThemeContextProvider>
  );
}

export default App;

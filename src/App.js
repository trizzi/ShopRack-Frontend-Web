import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppDownload from './components/AppDownload';
import Blog from './components/blog-section/Blog';
import CustomerReview from './components/customer-review/CustomerReview';
import Footer from './components/footer/Footer';
import Navbar from './components/Navbar';
import Services from './components/services/Services';
import Showcase from './components/Showcase';
import { ThemeContextProvider } from './context/ThemeContext';


function App() {
  return (
    <ThemeContextProvider>
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
    </ThemeContextProvider>
  );
}

export default App;

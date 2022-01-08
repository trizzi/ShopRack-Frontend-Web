import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppDownload from './components/AppDownload';
import Blog from './components/blog-section/Blog';
import CustomerReview from './components/customer-review/CustomerReview';
import Navbar from './components/Navbar';
import Services from './components/services/Services';
import Showcase from './components/Showcase';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Showcase />
        <Services />
        <AppDownload />
        <CustomerReview />
        <Blog />
      </>
    </Router>
  );
}

export default App;

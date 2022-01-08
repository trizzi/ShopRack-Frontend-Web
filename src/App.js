import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppDownload from './components/AppDownload';
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
      </>
    </Router>
  );
}

export default App;

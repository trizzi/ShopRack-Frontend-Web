import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
      </>
    </Router>
  );
}

export default App;

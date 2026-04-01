import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OldSite from './pages/OldSite';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/old" element={<OldSite />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MenuBar from './components/MenuBar';

const App: React.FC = () => (
  <Router>
    <MenuBar />
    <div className="content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
  </Router>
);

export default App;

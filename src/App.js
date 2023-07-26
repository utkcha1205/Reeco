// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddItem from './pages/AddItems';
import TopNavBar from './components/TopNavbar';

const App = () => {
  return (
    <Router>
      <TopNavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-item" element={<AddItem />} />
      </Routes>
    </Router>
  );
};

export default App;

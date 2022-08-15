import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;

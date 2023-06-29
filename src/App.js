import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Footer from './Component/Footer';
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import ContactForm from './Component/ContactForm';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<ContactForm/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default App;

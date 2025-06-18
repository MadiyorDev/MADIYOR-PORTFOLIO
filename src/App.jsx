import React from 'react';
import { Routes, Route } from 'react-router-dom';  // faqat shu import qilish kifoya
import Home from './pages/HomePage/Home';
import './App.css';
import AboutMe from './pages/AboutMe/AboutMe';
import Projects from './pages/Projects/Projects';
import ContactMe from './pages/ContactMe/ContactMe';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<ContactMe />} /> 
      <Route path="*" element={<Home />} /> {/* Agar noto‘g‘ri yo‘l bo‘lsa, Home sahifasiga qaytish */}
      {/* Kerak bo‘lsa, boshqa sahifalar qo‘shamiz */}
    </Routes>
  );
};

export default App;

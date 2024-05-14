import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Mew from './pages/Mew';
import Pokemon from './pages/Pokemon';
import Footer from './components/Footer';



function App() {
  return (
    
      <div className="App">
        <Navbar />
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mew" element={<Mew />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>

        <Footer />
      </div>
    
  );
}

export default App;

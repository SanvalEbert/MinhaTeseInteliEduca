import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';
import Article3 from './pages/Article3';
import References from './pages/References';
import Contact from './pages/Contact';
import ModelPage from './pages/ModelPage';
import DefensePresentation from './pages/DefensePresentation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/modelo" element={<ModelPage />} />
            <Route path="/artigo-1" element={<Article1 />} />
            <Route path="/artigo-2" element={<Article2 />} />
            <Route path="/artigo-3" element={<Article3 />} />
            <Route path="/referencias" element={<References />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/defesa" element={<DefensePresentation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


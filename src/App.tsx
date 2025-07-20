import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavBas from './components/NavBas'; // Importer le pied de page
import Home from './components/Home';
import Restaurants from './components/Restaurants';
import Logement from './components/Logement';
import Balades from './components/Balades';
import Activites from './components/Activites';
import Magasins from './components/Magasins';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/balades" element={<Balades />} />
        <Route path="/activites" element={<Activites />} />
        <Route path="/magasins" element={<Magasins />} />
      </Routes>
      <NavBas /> {/* Ajouter le pied de page ici */}
    </Router>
  );
}

export default App;
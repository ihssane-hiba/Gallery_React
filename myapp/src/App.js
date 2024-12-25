
import './App.css';
import React from 'react';
import Gallery from './Gallery';
import Meteo from './Meteo';

function App() {
  return (
    <div>
      <h1>Application React - Axios</h1>
      <h2>Recherche d'images</h2>
      <Gallery />
      <h2>Météo d'une ville</h2>
      <Meteo />

    </div>
    
  );
}

export default App;

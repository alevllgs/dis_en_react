// src/App.jsx
import React from 'react';
import Header from './components/Header';
import ButtonGroup from './components/ButtonGroup';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <div id="root">
      <Header /> {/* Contenedor de Navbar y Banner */}
      <div className="app-content">
        <ButtonGroup /> {/* Contenedor de los botones */}
      </div>
      <Footer />
    </div>
  );
};

export default App;


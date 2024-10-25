// src/components/Header.jsx
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import '../styles/Header.css';

const Header = () => {
  const images = [
    'url(/src/img/banner1.jpg)',
    'url(/src/img/banner2.jpg)',
    'url(/src/img/banner3.jpg)',
    'url(/src/img/banner4.jpg)'
  ];
  
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="header-container"
      style={{ backgroundImage: images[currentImage] }}
    >
      <Navbar />
      <div className="banner-overlay">
        <h1>Bienvenido a Estadísticas REM</h1>
      </div>
    </div>
  );
};

export default Header;

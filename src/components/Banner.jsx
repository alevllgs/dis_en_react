// src/components/Banner.jsx
import React from 'react';
import '../styles/Banner.css'; // Importa los estilos
import bannerImage from '../img/banner1.jpg'; // Importa la imagen

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner Estadísticas" className="banner-image" />
    </div>
  );
};

export default Banner;

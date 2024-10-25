// src/components/Banner.jsx
import React from 'react';
import '../styles/Banner.css';
import bannerImage from '../img/banner1.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner Estadísticas" className="banner-image" />
    </div>
  );
};

export default Banner;

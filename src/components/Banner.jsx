// src/components/Banner.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Banner.css';
import bannerImage1 from '../img/banner1.jpg';
import bannerImage2 from '../img/banner2.jpg';
import bannerImage3 from '../img/banner3.jpg';

const Banner = () => {
  const images = [bannerImage1, bannerImage2, bannerImage3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner">
      <img src={images[currentImage]} alt="Banner Estadísticas" className="banner-image" />
    </div>
  );
};

export default Banner;

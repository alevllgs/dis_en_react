// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css'; // Importa los estilos del footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#about">Acerca de</a>
          <a href="#contact">Contacto</a>
          <a href="#privacy">Política de privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

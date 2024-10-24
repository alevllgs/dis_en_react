import React from 'react';
import '../styles/Button.css';  // Importa los estilos específicos del botón

const Button = ({ href, icon, title, delay }) => {
  return (
    <a href={href} className="button" data-aos="fade-up" data-aos-delay={delay}>
      <div className="icon">
        <i className={`fas ${icon}`} aria-hidden="true"></i>
      </div>
      <h4 className="title">{title}</h4>
    </a>
  );
};

export default Button;

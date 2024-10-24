import React from 'react';
import '../styles/Button.css';

const Button = ({ href, icon, title, delay, iconColor }) => {
  return (
    <a href={href} className="button" data-aos="fade-up" data-aos-delay={delay}>
      <div className="icon" style={{ color: iconColor }}> {/* Aplicar color del ícono */}
        <i className={`fas ${icon}`}></i>
      </div>
      <h4 className="title">{title}</h4>
    </a>
  );
};

export default Button;

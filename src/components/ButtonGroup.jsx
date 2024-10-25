// src/components/ButtonGroup.jsx
import React from 'react';
import Button from './Button';
import '../styles/ButtonGroup.css';

const ButtonGroup = () => {
  return (
    <div className="buttons">
      <Button href="estadisticas/" icon="fa-chart-bar" title="Estadísticas REM" delay="0" iconColor="#007bff" />
      <Button href="egresos_hospitalarios/" icon="fa-hospital" title="Egresos Hospitalarios" delay="100" iconColor="#28a745" />
      <Button href="poblacion/" icon="fa-users" title="Población" delay="200" iconColor="#dc3545" />
      <Button href="lista_espera/" icon="fa-list-alt" title="Lista de Espera" delay="300" iconColor="#ffc107" />
      <Button href="mortalidad_natalidad/" icon="fa-heartbeat" title="Mortalidad / Natalidad" delay="400" iconColor="#6c757d" />
      <Button href="inmunizaciones/" icon="fa-syringe" title="R.N.I" delay="500" iconColor="#C8A2D5" />
      <Button href="prest_centinelas/" icon="fa-user-md" title="Prestaciones" delay="600" iconColor="#17a2b8" />
      <Button href="publicaciones/" icon="fa-book" title="Publicaciones" delay="700" iconColor="#fd7e14" />
      <Button href="at_urgencia/" icon="fa-ambulance" title="Atenciones de Urgencia" delay="800" iconColor="#ff6b6b" />
      <Button href="monitoreo_metas/" icon="fa-pie-chart" title="Monitoreo de Metas" delay="900" iconColor="#20c997" />
      <Button href="red_asistencial/" icon="fa-h-square" title="Red Asistencial" delay="1000" iconColor="#6f42c1" />
      <Button href="capsula/" icon="fa-graduation-cap" title="Capacitación" delay="1100" iconColor="#6610f2" />
      <Button href="noticias/" icon="fa-newspaper-o" title="Noticias" delay="1200" iconColor="#795548" />
    </div>
  );
};

export default ButtonGroup;

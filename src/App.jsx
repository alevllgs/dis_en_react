import React from 'react';
import Button from './components/Button';
import './App.css';  // Estilos globales de la aplicación

const App = () => {
  return (
    <div className="buttons">  {/* Contenedor de los botones */}
    <Button href="estadisticas/" icon="fa-chart-bar" title="Estadísticas REM" delay="0" />
    <Button href="egresos_hospitalarios/" icon="fa-hospital" title="Egresos Hospitalarios" delay="100" />
    <Button href="poblacion/" icon="fa-users" title="Población" delay="200" />
    <Button href="lista_espera/" icon="fa-list-alt" title="Lista de Espera" delay="300" />
    <Button href="mortalidad_natalidad/" icon="fa-heartbeat" title="Mortalidad / Natalidad" delay="400" />
    <Button href="inmunizaciones/" icon="fa-syringe" title="R.N.I" delay="500" />
    <Button href="prest_centinelas/" icon="fa-user-md" title="Prestaciones" delay="600" />
    <Button href="publicaciones/" icon="fa-book" title="Publicaciones" delay="700" />
    <Button href="at_urgencia/" icon="fa-ambulance" title="Atenciones de Urgencia" delay="800" />
    <Button href="monitoreo_metas/" icon="fa-pie-chart" title="Monitoreo de Metas" delay="900" />
    <Button href="red_asistencial/" icon="fa-h-square" title="Red Asistencial" delay="1000" />
    <Button href="capsula/" icon="fa-graduation-cap" title="Capacitación" delay="1100" />
    <Button href="noticias/" icon="fa-newspaper-o" title="Noticias" delay="1200" />
  </div>
  );
};

export default App;

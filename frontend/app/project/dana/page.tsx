// src/App.tsx
"use client";

import React from "react";
import "./App.css";

const App: React.FC = () => {
  const handleDonation = () => {
    window.location.href = "https://www.proyectodana.org/donar";
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Proyecto Benéfico de Ayuda a los Afectados por la DANA</h1>
        <p>
          Ayudemos a los afectados por el fenómeno meteorológico DANA, que ha
          dejado numerosas personas sin hogar y causado daños graves en varias
          regiones. Tu apoyo puede marcar la diferencia.
        </p>
        <h2>¿Cómo puedes ayudar?</h2>
        <ul>
          <li>Donaciones monetarias para la reconstrucción de viviendas.</li>
          <li>Provisión de alimentos y ropa a los damnificados.</li>
          <li>Voluntariado en las zonas afectadas.</li>
        </ul>
        <p>
          Muchas gracias.{" "}
          
        </p>
        <button onClick={handleDonation}>Donar Ahora</button>
      </header>
    </div>
  );
};

export default App;

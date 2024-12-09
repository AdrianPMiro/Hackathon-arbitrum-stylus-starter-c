// src/App.tsx
"use client";

import React from "react";
import "./App.css";

const App: React.FC = () => {
  const handleDonation = () => {
    window.location.href = "https://www.plantararboles.org/donar";
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Proyecto de Plantación de Árboles</h1>
        <p>
          Ayudemos a nuestro planeta plantando árboles y combatiendo el cambio
          climático. Tu apoyo es fundamental para preservar el medio ambiente y
          garantizar un futuro más verde.
        </p>
        <h2>¿Cómo puedes ayudar?</h2>
        <ul>
          <li>Donaciones monetarias para plantar más árboles.</li>
          <li>Provisión de herramientas y materiales para plantación.</li>
          <li>Participa como voluntario en nuestros eventos locales.</li>
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

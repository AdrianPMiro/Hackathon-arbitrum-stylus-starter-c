// src/App.tsx
"use client";

import React from "react";
import "./App.css";

const App: React.FC = () => {
  const handleDonation = () => {
    window.location.href = "https://www.ayudaaninosp.org/donar";
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Proyecto de Ayuda a Niños en Necesidad</h1>
        <p>
          Brindemos apoyo a niños en situaciones vulnerables. Con tu ayuda,
          podemos proporcionar acceso a educación, alimentos y servicios médicos.
          Tu contribución puede cambiar sus vidas para siempre.
        </p>
        <h2>¿Cómo puedes ayudar?</h2>
        <ul>
          <li>Haz una donación para financiar programas educativos y de salud.</li>
          <li>Proporciona ropa, alimentos y material escolar.</li>
          <li>Únete como voluntario en nuestras campañas solidarias.</li>
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

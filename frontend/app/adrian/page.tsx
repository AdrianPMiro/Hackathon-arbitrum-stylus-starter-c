import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <header className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <button className="about-button">SOBRE NOSOTROS</button>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Cada aporte cuenta, y cada aporte llega</h1>
          <p>Tu ayuda llega donde más importa, con total claridad y transparencia.</p>
          <button className="donate-button">DONAR</button>
        </div>
      </section>
    </div>
  );
};

export default App;

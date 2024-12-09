import React from "react";

const App: React.FC = () => {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
      backgroundColor: "#ffffff",
      position: "absolute" as "absolute",
      top: 0,
      width: "100%",
      zIndex: 100,
    },
    logo: {
      width: "50px",
    },
    button: {
      backgroundColor: "#00c28e",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1em",
      fontWeight: "bold",
    },
    hero: {
      display: "flex",
      flexDirection: "column" as "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center" as "center",
      height: "100vh",
      backgroundImage: "url('/background.jpg')", // Cambia por la ruta de tu imagen de fondo
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      position: "relative" as "relative",
    },
    overlay: {
      position: "absolute" as "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    heroContent: {
      position: "relative" as "relative",
      zIndex: 10,
    },
    heroH1: {
      fontSize: "3em",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    heroP: {
      fontSize: "1.5em",
      marginBottom: "30px",
    },
  };

  return (
    <div>
      <header style={styles.header}>
        <img src="/logo.png" alt="Logo" style={styles.logo} /> {/* Cambia por la ruta de tu logo */}
        <button style={styles.button}>SOBRE NOSOTROS</button>
      </header>

      <section style={styles.hero}>
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroH1}>Cada aporte cuenta, y cada aporte llega</h1>
          <p style={styles.heroP}>
            Tu ayuda llega donde más importa, con total claridad y transparencia.
          </p>
          <button style={styles.button}>DONAR</button>
        </div>
      </section>
    </div>
  );
};

export default App;

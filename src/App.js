import React, { useState, useEffect } from "react";
import "./App.css";
import image from "./image/wiwos.jpeg";
import music from "./image/flores.mp3"; // Importa el archivo de música

const App = () => {
  const [accepted, setAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: "50%",
    left: "50%",
    position: "",
  });

  const handleYesClick = () => {
    setAccepted(true);
  };

  const handleNoClick = () => {
    const randomTop = Math.floor(Math.random() * 90) + "%";
    const randomLeft = Math.floor(Math.random() * 90) + "%";
    setNoButtonPosition({
      top: randomTop,
      left: randomLeft,
      position: "absolute",
    });
  };

  useEffect(() => {
    if (accepted) {
      createFlowers();
    }
  }, [accepted]);

  const createFlowers = () => {
    const flowerContainer = document.createElement("div");
    flowerContainer.className = "flowers-container";
    document.body.appendChild(flowerContainer);
  
    for (let i = 0; i < 50; i++) {
      const flower = document.createElement("div");
      flower.className = "flower";
      flower.style.top = Math.random() * 100 + "vh";
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.animationDuration = Math.random() * 5 + 3 + "s";
  
      // Crear pétalos
      for (let j = 0; j < 4; j++) {
        const petal = document.createElement("div");
        petal.className = "petal";
        flower.appendChild(petal);
      }
  
      // Crear centro de la flor
      const center = document.createElement("div");
      center.className = "center";
      flower.appendChild(center);
  
      flowerContainer.appendChild(flower);
    }
  };

  if (accepted) {
    return (
      <div className="container">
        <audio src={music} autoPlay loop /> {/* Reproduce la música en bucle */}
        <h1 className="message">A mi amor, en este 21 de marzo 🥰</h1>
        <h2>
Mi vida, hoy es 21 de marzo, y el otoño pinta el cielo con tonos dorados, como si la naturaleza misma quisiera recordarnos la belleza de las flores amarillas. Esas flores que llevan el sol en sus pétalos, como tú llevas la luz en mi vida. <br />
<br />

Cada hoja que cae me susurra tu nombre, cada brisa de otoño me recuerda el suave roce de tus manos. Y aunque el tiempo avance y las estaciones cambien, mi amor por ti sigue siendo eterno, como esos campos de flores que florecen incluso en los días más fríos.  <br />  <br />

Hoy, como cada día, quiero regalarte mi amor, con la ternura de un pétalo que se deja llevar por el viento, con la fuerza de un árbol que nunca deja de sostenerse. Porque tú eres mi primavera eterna en medio del otoño, mi sol en cualquier estación.  <br />  <br />

Te amo, ahora y siempre. 🌻🍂💛
        </h2>
        <img src={image}  style={{ width: '300px', height: '433px', borderRadius: '50%', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)' }} alt="los wiwos"></img>
        
      </div>
    );
  }

  return (
    <div className="container">
      <h1>💍 ¿Qué respondiste cuando te dije "Te quieres casar conmigo"? 💍</h1>
      <div className="buttons">
        <button className="yes-button" onClick={handleYesClick}>
          Sí
        </button>
        <button
          className="no-button"
          onClick={handleNoClick}
          style={{
            top: noButtonPosition.top,
            left: noButtonPosition.left,
            position: noButtonPosition.position,
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default App;
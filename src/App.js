// src/App.js
import React, { useState } from "react";
import "./App.css";


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

  if (accepted) {
    return (
      <div className="container">
        <h1 className="message">wiwiwiwiwiwiwi yo lo sabia wiwiwiwi 🥰🥰🥰🥰🥰🥰</h1>
        <h2>Quiero que sepas que quiero amarte el resto de mi vida, te amo mucho 🥰.
          Se que no hago muchas cartas ni dibujos, es porque siento que no se me dan bien 
          pero se que hay algo que si me sale bien y es hacer paginas web, con esto 
          siento que si puedo dar un detalle que tengas siempre 😁.
          Cuando quieras solo necesitaras entrar a la pagina y ver lo que te deje.
        </h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>💍 ¿Te quieres casar conmigo? 💍</h1>
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

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
        <h2>Los wiwos se casan</h2>
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

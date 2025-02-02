import React, { useState } from "react";
import "./Second.css";

function ExerciseTwo() {
  const [currentColor, setColor] = useState("#00ffff");

  function handleRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let random = `rgb(${red}, ${green}, ${blue})`;

    setColor(random);
  }

  return (
    <div className="two">
      <div style={{ backgroundColor: currentColor }} className="shape"></div>
      <button onClick={handleRandomColor}>Change</button>
    </div>
  );
}

export default ExerciseTwo;

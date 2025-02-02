import React, { useState } from "react";
import "./First.css";

function ExerciseOne() {
  const [numbers, setNumbers] = useState([]);

  const handleAdd = () => {
    setNumbers([...numbers, Math.floor(Math.random() * 100) + 1]);
  };

  const handleRemove = () => {
    setNumbers(numbers.slice(0, -1));
  };
  const handleClear = () => {
    setNumbers([]);
  };
  return (
    <div>
      <div className="numMassiv">
        {numbers.length > 0 ? numbers.join(", ") : "Massiv bo'sh"}
      </div>
      <button className="addBtn" onClick={handleAdd}>
        Add
      </button>
      <button className="remBtn" onClick={handleRemove}>
        Remove
      </button>
      <button className="clearBtn" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}

export default ExerciseOne;

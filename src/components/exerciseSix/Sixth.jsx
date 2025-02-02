import React, { useState } from "react";
import "./Sixth.css";

function ExerciseSix() {
  const [number, setNumber] = useState(1);
  const [sums, setSums] = useState([]);

  const multiplyByTwo = () => {
    const newValue = number * 2;
    setNumber(newValue);
    setSums([...sums, `Qiymat ${number} dan ${newValue} ga ko'paydi`]);
  };

  const divideByTwo = () => {
    if (number > 1) {
      const newValue = number / 2;
      setNumber(newValue);
      setSums([...sums, `Qiymat ${number} dan ${newValue} ga bo'lindi`]);
    }
  };

  const clearAll = () => {
    setNumber(1);
    setSums([]);
  };

  return (
    <div>
      <h2>Qiymat: {number}</h2>
      <button className="btn multiply" onClick={multiplyByTwo}>
        x2
      </button>
      <button
        className="btn divide"
        onClick={divideByTwo}
        disabled={number == 1}
      >
        /2
      </button>
      <button
        className="btn clear"
        onClick={clearAll}
        disabled={number == 1 && sums.length == 0}
      >
        Clear
      </button>
      <div className="container">
        {" "}
        <div className="sums">
          {sums.map((sum, index) => (
            <p key={index}>{sum}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExerciseSix;

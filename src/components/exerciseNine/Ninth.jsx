import React, { useState } from "react";

function ExerciseNinth() {
  const numbers = [10, 20, 30, 40, 50];
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < numbers.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      <h3>Hozirgi qiymat:{numbers[index]}</h3>

      <button onClick={prevSlide} disabled={index == 0}>
        oldingi
      </button>
      <button onClick={nextSlide} disabled={index == numbers.length - 1}>
        keyingi
      </button>
    </div>
  );
}

export default ExerciseNinth;

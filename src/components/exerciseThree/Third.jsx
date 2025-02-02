import React, { useState } from "react";
import "./Third.css";

function ExerciseThree() {
  const [word, setWord] = useState(`Xush kelibsiz!`);

  const handlerContinue = () => {
    setWord(`Ishlaringiz yaxshimi?`);
  };

  const handlerRepeat = () => {
    setWord(`Kayfiyatlaringiz a'lomi?`);
  };

  const handlerFinish = () => {
    setWord(`O'zingizni asrang!`);
  };
  return (
    <div className="ExThree">
      <h3 className="ThreeTitle">{word}</h3>
      <p>{word.length}</p>
      <div>
        <button onClick={handlerContinue}>Davom etamiz</button>
        <button onClick={handlerRepeat}>Qaytadan boshlaymiz</button>
        <button onClick={handlerFinish}>Tugatamiz</button>
      </div>
    </div>
  );
}

export default ExerciseThree;

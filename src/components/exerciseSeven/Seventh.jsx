import React, { useState } from "react";
import "./Seventh.css";

function ExerciseSeventh() {
  const [cLickSt, setcLickSt] = useState(0);
  const [cLickNd, setcLickNd] = useState(0);
  const [cLickRd, setcLickRd] = useState(0);

  const firstBtn = () => setcLickSt((prev) => prev + 1);
  const secondBtn = () => setcLickNd((prev) => prev + 1);
  const thirdBtn = () => setcLickRd((prev) => prev + 1);

  const handleReset = () => {
    setcLickSt(0);
    setcLickNd(0);
    setcLickRd(0);
  };

  return (
    <div className="seven">
      <h2>Tugma bosish hisoblagichi</h2>
      <button onClick={firstBtn}>Tugma 1: ({cLickSt})</button>
      <button onClick={secondBtn}>Tugma 2: ({cLickNd})</button>
      <button onClick={thirdBtn}>Tugma 3: ({cLickRd})</button>
      <br />
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default ExerciseSeventh;

import React, { useState } from "react";
import "./Fourth.css";

function ExerciseFour() {
  let textState = true;
  const [state, setState] = useState("block");

  function handleStateText() {
    if (textState) {
      textState = false;
      return setState("none");
    } else {
      textState = true;
      return setState("block");
    }
  }

  return (
    <div className="fourth">
      <p style={{ display: state }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
        deserunt cumque cum, accusamus ipsum dolor vel culpa eaque commodi quam!
      </p>
      <button onClick={handleStateText}>
        {state == "block" ? "Yashirish" : "Ko'rsatish"}
      </button>
    </div>
  );
}

export default ExerciseFour;

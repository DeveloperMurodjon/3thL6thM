import React, { useState } from "react";

function ExerciseTenth() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="ten" style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          width: "100px",
          height: "50px",
          borderTopLeftRadius: "90%",
          borderTopRightRadius: "90%",
          backgroundColor: "black",
          border: "0.1px solid black",
          margin: "0px auto",
          transition: "all 0.8s ease-in-out",
        }}
      ></div>
      <div
        className="lamp"
        style={{
          width: "100px",
          height: "100px",
          borderTopLeftRadius: "0%",
          borderTopRightRadius: "0%",
          borderBottomLeftRadius: "90%",
          borderBottomRightRadius: "90%",
          backgroundColor: isOn ? "yellow" : "white",
          border: "0.1px solid black",
          margin: "20px auto",
          marginTop: "0",
          transition: "all 0.8s ease-in-out",
          boxShadow: isOn ? "0 0 50px 10px rgba(255, 255, 0, 0.6)" : "none",
        }}
      ></div>
      <button onClick={toggleLight}>{isOn ? "O'chirish" : "Yoqish"}</button>
      <p>{isOn ? "Lampochka yoqilgan" : "Lampochka o'chirilgan"}</p>
    </div>
  );
}

export default ExerciseTenth;

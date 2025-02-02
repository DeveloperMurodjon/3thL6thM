import React from "react";
import "./App.css";
import ExerciseOne from "./components/exerciseOne/First.jsx";
import ExerciseTwo from "./components/exerciseTwo/second.jsx";
import ExerciseThree from "./components/exerciseThree/Third.jsx";
import ExerciseFour from "./components/exerciseFour/Fourth.jsx";
import ExerciseSixth from "./components/exerciseSix/Sixth.jsx";
import ExerciseSeventh from "./components/exerciseSeven/Seventh.jsx";
import ExerciseNinth from "./components/exerciseNine/Ninth.jsx";
import ExerciseTenth from "./components/exerciseTen/tenth.jsx";

function App() {
  return (
    <div className="wrapper">
      <b>1</b>
      <ExerciseOne />
      <hr />
      <b>2</b>
      <ExerciseTwo />
      <hr />
      <b>3</b>
      <ExerciseThree />
      <hr />
      <b>4</b>
      <ExerciseFour />
      <hr />
      <b>5</b>
      <ExerciseOne />
      <hr />
      <b>6</b>
      <ExerciseSixth />
      <hr />
      <b>7</b>
      <ExerciseSeventh />
      <hr />
      <b>8 Ustoz alohida o'zi tushintirb berar ekan</b>
      <hr />
      <b>9</b>
      <ExerciseNinth />
      <hr />
      <b>10</b>
      <ExerciseTenth />
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";

const fName = "Jarrett";
const lName = "Sanchez";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {num}.</p>
  </div>,
  document.getElementById("root")
);
//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const Hour = new Date().getHours();

const customStyle = {
  color: ""
};

let Greeting;

if (Hour < 12) {
  Greeting = "Good Afternoon";
  customStyle.color = "red";
} else if (Hour < 18) {
  Greeting = "Good Morning";
  customStyle.color = "blue";
} else {
  Greeting = "Good evening";
  customStyle.color = "green";
}

ReactDOM.render(
  <div>
    <h1 style={customStyle}>{Greeting}</h1>
  </div>,
  document.getElementById("root")
);

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

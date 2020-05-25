import React, { useState } from "react";
import "./App.css";
import ReactTypingEffect from "react-typing-effect";
import Jam from "./Jam";

function App() {
  const [clickCounter, setClickCounter] = useState(0);
  const [ada, setAda] = useState(false);

  let greet = "";
  const name = "Nadine";
  let isDay = true;

  const date = new Date();
  let hour = date.getHours();

  if (hour < 12 && hour > 3) {
    greet = `Good Morning, ${name}.`;
  } else if (hour >= 12 && hour < 17) {
    isDay = true;
    greet = `Good Afternoon, ${name}.`;
  } else if (hour > 18) {
    isDay = false;
    greet = `Good Night, ${name}.`;
  } else if (hour >= 17 && hour <= 18) {
    greet = `Good Evening, ${name}.`;
  }

  const ReactTypingEffectDemo = () => {
    return (
      <ReactTypingEffect
        eraseDelay={10000000000}
        text={greet}
        speed={100}
        typingDelay={1500}
      />
    );
  };

  const clickFunction = () => {
    console.log(clickCounter);
    setClickCounter(clickCounter + 1);
    setAda(clickCounter > 0 ? true : false);
  };

  return (
    <div
      className="App"
      style={{
        background: isDay ? "white" : "#141414",
        color: isDay ? "black" : "white",
      }}
      onClick={clickFunction}
    >
      <div className="content">
        <Jam />
        <h1>{ReactTypingEffectDemo()}</h1>
        <h2 className={clickCounter > 1 ? "thanks" : "nope"}>
          Makasih ya kopinya :)
        </h2>
        <h3 className={clickCounter > 2 ? "thanks" : "nope"}>Kuy Mabar</h3>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import ReactTypingEffect from "react-typing-effect";
import Jam from "./Jam";
import Kotak from "./Kotak";
import music from "./music.mp3";

function App() {
  const [clickCounter, setClickCounter] = useState(0);
  const [ada, setAda] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  let greet = "";
  const name = "Nadine";
  let isDay = true;
  const date = new Date();
  let hour = date.getHours();
  const audio = new Audio(music);

  const start = () => {
    audio.play();
  };

  if (hour < 12 && hour > 3) {
    greet = `Good Morning, ${name}.`;
    if (hour < 7) {
      isDay = true;
    }
  } else if (hour >= 12 && hour < 17) {
    isDay = true;
    greet = `Good Afternoon, ${name}.`;
  } else if (hour > 18) {
    isDay = false;
    greet = `Good Night, ${name}.`;
  } else if (hour >= 17 && hour <= 18) {
    greet = `Good Evening, ${name}.`;
  } else if (hour >= 0 && hour <= 3) {
    isDay = false;
    greet = `Good Night, ${name}.`;
  }

  const clickFunction = () => {
    setClickCounter(clickCounter + 1);
    setAda(!ada);
    setRandomNumber(Math.random() * 80);
    if (clickCounter === 2) {
      start();
    }
  };

  const ReactTypingEffectDemo = () => {
    return (
      <ReactTypingEffect
        eraseDelay={100000}
        text={greet}
        speed={100}
        typingDelay={1500}
      />
    );
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
      <h1
        className={ada ? "random" : "none"}
        style={{ top: `${randomNumber}%`, marginRight: randomNumber }}
      >
        Aww
      </h1>
      <div className="content">
        <div className="jam">
          <Jam />
        </div>
        <h1>{ReactTypingEffectDemo()}</h1>
        <div
          className="addision"
          style={{
            display: hour >= 1 && hour <= 3 ? "inline" : "none",
          }}
        >
          <h2 className={clickCounter > 1 ? "thanks" : "nope"}>
            {hour >= 1 && hour <= 3 ? "Ngapain malem malem kesini?" : ""}
          </h2>
        </div>
      </div>
      <Kotak />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import ReactTypingEffect from "react-typing-effect";

function App() {
  let time = "";
  let greet = "";
  const name = "Jodoh";

  const date = new Date();
  let hour = date.getHours();

  if (hour < 12 && hour > 3) {
    greet = `Good Morning, ${name}.`;
  } else if (hour >= 12) {
    greet = `Good Afternoon, ${name}.`;
  } else if (hour > 18) {
    greet = `Good Night, ${name}`;
  } else if (hour >= 17 && hour <= 18) {
    greet = `Good Evening, ${name}.`;
  }

  time = date.toLocaleTimeString();

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

  return (
    <div className="App">
      <div className="content">
        <h1>{time}</h1>
        <h1>{ReactTypingEffectDemo()}</h1>
      </div>
    </div>
  );
}

export default App;

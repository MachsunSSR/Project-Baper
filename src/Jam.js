import React from "react";

function Jam() {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (second < 10) {
    second = "0" + second;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  let time = hour + ":" + minute + ":" + second;

  setTimeout(Jam, 1000);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}

Jam();

export default Jam;

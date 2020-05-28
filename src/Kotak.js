import React from "react";
import "./App.css";

function Kotak() {
  const date = new Date();

  return (
    <div className="animation-area">
      <ul className="box-area">
        <li
          style={{
            background:
              date.getHours() > 7 && date.getHours() < 18
                ? "rgba(30, 27, 102)"
                : "rgba(163, 31, 97, 0.8)",
          }}
        ></li>
        <li
          style={{
            background:
              date.getHours() > 7 && date.getHours() < 18
                ? "rgba(30, 27, 102)"
                : "rgba(163, 31, 97, 0.8)",
          }}
        ></li>
        <li
          style={{
            background:
              date.getHours() > 7 && date.getHours() < 18
                ? "rgba(30, 27, 102)"
                : "rgba(163, 31, 97, 0.8)",
          }}
        ></li>
        <li
          style={{
            background:
              date.getHours() > 7 && date.getHours() < 18
                ? "rgba(30, 27, 102)"
                : "rgba(163, 31, 97, 0.8)",
          }}
        ></li>
        <li
          style={{
            background:
              date.getHours() > 7 && date.getHours() < 18
                ? "rgba(30, 27, 102)"
                : "rgba(163, 31, 97, 0.8)",
          }}
        ></li>
        <li
          style={{
            background:
              date.getHours() > 7 && date.getHours() < 18
                ? "rgba(30, 27, 102)"
                : "rgba(163, 31, 97, 0.8)",
          }}
        ></li>
      </ul>
    </div>
  );
}

export default Kotak;

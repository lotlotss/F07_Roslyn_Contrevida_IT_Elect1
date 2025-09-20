import React, { useState } from "react";

function ColorChangerApp() {
  const [color, setColor] = useState("lightblue");

  const colors = ["lightblue", "lightgreen", "lightpink", "yellow", "orange"];

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>Color Changer App</h1>
      <p>Current Color: {color}</p>
      <div>
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            style={{
              margin: "5px",
              padding: "10px 15px",
              border: "none",
              cursor: "pointer",
              backgroundColor: c === color ? "black" : c,
              color: c === color ? "white" : "black"
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorChangerApp;

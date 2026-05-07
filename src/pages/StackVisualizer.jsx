import { useState } from "react";
import { push, pop } from "../algorithms/stack/stackOps";

export default function StackVisualizer() {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState("");

  const pushElement = () => {
  if (input === "") return;
  setStack(push(stack, input));
  setInput("");
};

const popElement = () => {
  setStack(pop(stack));
};

  return (
  <div style={{ padding: "40px", color: "white" }}>
    
    {/* TITLE */}
    <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
      Stack Visualization
    </h1>

    {/* MAIN FLEX (same as sorting) */}
    <div style={{ display: "flex", justifyContent: "space-between" }}>

      {/* LEFT (MAIN CONTENT) */}
      <div style={{ width: "70%" }}>

        {/* CENTER EVERYTHING INSIDE */}
        <div style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>

          {/* INPUT */}
          <div style={{ marginBottom: "20px" }}>
            <input
              placeholder="Enter value"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                padding: "10px",
                width: "220px",
                marginRight: "10px",
                borderRadius: "6px"
              }}
            />

            <button onClick={pushElement} style={{ marginRight: "10px" }}>
              Push
            </button>

            <button onClick={popElement}>
              Pop
            </button>
          </div>

          {/* STACK */}
          <div
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              alignItems: "center",
              gap: "10px",
              marginTop: "30px"
            }}
          >
            {stack.map((val, i) => (
              <div
                key={i}
                style={{
                  width: "120px",
                  height: "40px",
                  background: "#7c3aed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "6px"
                }}
              >
                {val}
              </div>
            ))}
          </div>

          {/* TOP */}
          <p style={{ marginTop: "20px" }}>
            Top → {stack.length > 0 ? stack[stack.length - 1] : "Empty"}
          </p>
        </div>
      </div>

      {/* RIGHT (COMPLEXITY — SAME STYLE AS SORTING) */}
      <div
        style={{
          width: "25%",
          padding: "20px",
          borderLeft: "1px solid #444"
        }}
      >
        <h2>Complexity</h2>

        <p><strong>Push:</strong> O(1)</p>
        <p><strong>Pop:</strong> O(1)</p>
        <p><strong>Space:</strong> O(n)</p>
      </div>

    </div>
  </div>
);
}
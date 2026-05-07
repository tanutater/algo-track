import { useState } from "react";

export default function QueueVisualizer() {
  const [queue, setQueue] = useState([]);
  const [input, setInput] = useState("");

  const enqueue = () => {
    if (input === "") return;
    setQueue([...queue, input]);
    setInput("");
  };

  const dequeue = () => {
    if (queue.length === 0) return;
    setQueue(queue.slice(1));
  };

  return (
    <div style={{ padding: "20px 40px", color: "white" }}>
      
      {/* TITLE */}
      <h1 style={{ textAlign: "center", margin: "10px 0 20px 0" }}>
        Queue Visualization
      </h1>

      {/* MAIN LAYOUT (same as sorting/stack) */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>

        {/* LEFT */}
        <div style={{ width: "70%" }}>
          
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

              <button onClick={enqueue} style={{ marginRight: "10px" }}>
                Enqueue
              </button>

              <button onClick={dequeue}>
                Dequeue
              </button>
            </div>

            {/* QUEUE */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "30px"
              }}
            >
              {queue.map((val, i) => (
                <div
                  key={i}
                  style={{
                    width: "50px",
                    height: "50px",
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

            {/* FRONT / REAR */}
            <p style={{ marginTop: "20px" }}>
              Front → {queue.length > 0 ? queue[0] : "Empty"}
            </p>
            <p>
              Rear → {queue.length > 0 ? queue[queue.length - 1] : "Empty"}
            </p>

          </div>
        </div>

        {/* RIGHT (COMPLEXITY) */}
        <div
          style={{
            width: "25%",
            padding: "20px",
            borderLeft: "1px solid #444"
          }}
        >
          <h2>Complexity</h2>

          <p><strong>Enqueue:</strong> O(1)</p>
          <p><strong>Dequeue:</strong> O(1)</p>
          <p><strong>Space:</strong> O(n)</p>
        </div>

      </div>
    </div>
  );
}
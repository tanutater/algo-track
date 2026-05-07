import { useState, useEffect } from "react";

export default function SortingVisualizer({ title, getAnimations }) {
  const [array, setArray] = useState([64, 25, 12, 22, 11]);
  const [input, setInput] = useState("");
  const [isSorting, setIsSorting] = useState(false);
  const [colors, setColors] = useState([]);
  const [speed, setSpeed] = useState(400);

  // MESSAGES
  const [message, setMessage] = useState("");

  // MERGE SORT SPECIAL VIEW
  const [mergeSteps, setMergeSteps] = useState([]);

  useEffect(() => {
    setColors(new Array(array.length).fill("default"));
  }, [array]);

  const handleInput = (e) => setInput(e.target.value);

  const applyInput = () => {
    const arr = input
      .split(",")
      .map(Number)
      .filter((n) => !isNaN(n));

    if (arr.length > 0) {
      setArray(arr);
      setColors(new Array(arr.length).fill("default"));
      setMergeSteps([]);
    }
  };

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  const runAnimations = async (animations) => {
    setIsSorting(true);

    let arr = [...array];

    setMergeSteps([]);

    for (let step of animations) {
      let newColors = new Array(arr.length).fill("default");

      setMessage("");

      // =========================
      // 🟠 DIVIDE
      // =========================
      if (step.type === "divide") {

        for (let x = step.left; x <= step.right; x++) {
          newColors[x] = "divide";
        }

        const leftPart = arr.slice(step.left, step.mid + 1);
        const rightPart = arr.slice(step.mid + 1, step.right + 1);

        setMessage("Dividing Array");

        setMergeSteps((prev) => [
          ...prev,
          {
            type: "divide",
            text:
              `[ ${leftPart.join(" ")} ]   |   [ ${rightPart.join(" ")} ]`,
          },
        ]);
      }

      // =========================
      // 🟢 MERGE
      // =========================
      if (step.type === "merge") {

        for (let x = step.left; x <= step.right; x++) {
          newColors[x] = "merge";
        }

        const merged = arr.slice(step.left, step.right + 1);

        setMessage("Merging Arrays");

        setMergeSteps((prev) => [
          ...prev,
          {
            type: "merge",
            text: `[ ${merged.join(" ")} ]`,
          },
        ]);
      }

      // =========================
      // 🟡 COMPARE
      // =========================
      if (step.type === "compare") {
        const [a, b] = step.indices;

        newColors[a] = "compare";
        newColors[b] = "compare";

        setMessage(`Comparing ${arr[a]} and ${arr[b]}`);
      }

      // =========================
      // 🔴 ACTIVE
      // =========================
      if (step.type === "newMin" || step.type === "pivot") {
        newColors[step.index] = "active";
      }

      // =========================
      // 🔵 SWAP
      // =========================
      if (step.type === "swap") {
        const [a, b] = step.indices;

        newColors[a] = "swap";
        newColors[b] = "swap";

        [arr[a], arr[b]] = [arr[b], arr[a]];

        setArray([...arr]);

        setMessage(`Swapping ${arr[b]} and ${arr[a]}`);
      }

      // =========================
      // 🟠 OVERWRITE
      // =========================
      if (step.type === "overwrite") {

        newColors[step.index] = "write";

        arr[step.index] = step.value;

        setArray([...arr]);

        setMessage(
          `Placed ${step.value} at position ${step.index}`
        );
      }

      setColors(newColors);

      await sleep(speed);
    }

    setColors(new Array(arr.length).fill("default"));

    setMessage(`${title} Completed ✅`);

    setIsSorting(false);
  };

  const startSort = () => {
    const animations = getAnimations(array);
    runAnimations(animations);
  };

  const maxVal = Math.max(...array);

  const getTimeComplexity = (title) => {
    switch (title) {
      case "Selection Sort":
        return "O(n²)";
      case "Insertion Sort":
        return "O(n²)";
      case "Bubble Sort":
        return "O(n²)";
      case "Merge Sort":
        return "O(n log n)";
      case "Quick Sort":
        return "O(n log n) avg, O(n²) worst";
      default:
        return "-";
    }
  };

  const getSpaceComplexity = (title) => {
    switch (title) {
      case "Selection Sort":
      case "Insertion Sort":
      case "Bubble Sort":
        return "O(1)";
      case "Merge Sort":
        return "O(n)";
      case "Quick Sort":
        return "O(log n)";
      default:
        return "-";
    }
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      
      {/* TITLE */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        {title} Visualization
      </h1>

      {/* MAIN LAYOUT */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            width: "70%",
            textAlign: "center",
          }}
        >
          {/* INPUT */}
          <div style={{ marginBottom: "20px" }}>
            <input
              placeholder="5,3,8,1"
              value={input}
              onChange={handleInput}
              style={{
                padding: "10px",
                width: "250px",
                borderRadius: "6px",
                marginRight: "10px",
              }}
            />

            <button
              onClick={applyInput}
              style={{
                marginRight: "10px",
              }}
            >
              Apply
            </button>

            <button
              onClick={startSort}
              disabled={isSorting}
            >
              Start
            </button>
          </div>

          {/* SPEED */}
          <div style={{ marginBottom: "25px" }}>
            <label>Speed: </label>

            <input
              type="range"
              min="50"
              max="1000"
              step="50"
              value={speed}
              onChange={(e) =>
                setSpeed(Number(e.target.value))
              }
            />
          </div>

          {/* MESSAGE */}
          <div
            style={{
              marginBottom: "20px",
              fontSize: "20px",
              fontWeight: "bold",
              minHeight: "30px",
            }}
          >
            {message}
          </div>

          {/* MERGE SORT PROCESS */}
          {title === "Merge Sort" && (
            <div
              style={{
                marginBottom: "30px",
                textAlign: "left",
                width: "80%",
                marginInline: "auto",
                maxHeight: "250px",
                overflowY: "auto",
                padding: "15px",
                border: "1px solid #444",
                borderRadius: "10px",
                background: "#111827",
              }}
            >
              <h3 style={{ marginBottom: "15px" }}>
                Merge Sort Process
              </h3>

              {mergeSteps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    marginBottom: "10px",
                    color:
                      step.type === "divide"
                        ? "#f59e0b"
                        : "#22c55e",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {step.type === "divide"
                    ? "Divide → "
                    : "Merge → "}

                  {step.text}
                </div>
              ))}
            </div>
          )}

          {/* BARS */}
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
              height: "300px",
              gap: "12px",
            }}
          >
            {array.map((val, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    height: `${(val / maxVal) * 250}px`,
                    width: "35px",
                    borderRadius: "6px",

                    background:
                      colors[i] === "divide"
                        ? "#f59e0b"

                        : colors[i] === "merge"
                        ? "#22c55e"

                        : colors[i] === "compare"
                        ? "#facc15"

                        : colors[i] === "active"
                        ? "#ef4444"

                        : colors[i] === "swap"
                        ? "#06b6d4"

                        : colors[i] === "write"
                        ? "#fb923c"

                        : "#7c3aed",
                  }}
                />

                <div style={{ marginTop: "5px" }}>
                  {val}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            width: "25%",
            padding: "20px",
            borderLeft: "1px solid #444",
          }}
        >
          <h2>Complexity</h2>

          <p>
            <strong>Time:</strong>{" "}
            {getTimeComplexity(title)}
          </p>

          <p>
            <strong>Space:</strong>{" "}
            {getSpaceComplexity(title)}
          </p>
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { getInsertionSortAnimations } from "../algorithms/sorting/insertionSort";

export default function InsertionSort() {
  const [array, setArray] = useState([5, 3, 8, 4, 1]);
  const [input, setInput] = useState("");
  const [isSorting, setIsSorting] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const applyInput = () => {
    const arr = input.split(",").map(Number).filter(n => !isNaN(n));
    if (arr.length > 0) setArray(arr);
  };

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  const runAnimations = async (animations) => {
    setIsSorting(true);
    let arr = [...array];

    for (let i = 0; i < animations.length; i++) {
      const { type, index, value } = animations[i];

      if (type === "overwrite") {
        arr[index] = value;
        setArray([...arr]);
      }

      await sleep(400);
    }

    setIsSorting(false);
  };

  const startSort = () => {
    const animations = getInsertionSortAnimations(array);
    runAnimations(animations);
  };

  const maxVal = Math.max(...array);

  return (
    <div style={{ padding: "20px", color: "white" }}>
      
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Insertion Sort Visualization
      </h1>

      {/* INPUT + BUTTONS */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="e.g. 5,3,8,1"
          value={input}
          onChange={handleInput}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "6px",
            marginRight: "10px"
          }}
        />

        <button
          onClick={applyInput}
          style={{ padding: "10px 15px", marginRight: "10px" }}
        >
          Apply
        </button>

        <button
          onClick={startSort}
          disabled={isSorting}
          style={{ padding: "10px 15px" }}
        >
          Start
        </button>
      </div>

      {/* BARS */}
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          height: "300px",
          gap: "10px"
        }}
      >
        {array.map((val, idx) => (
          <div key={idx} style={{ textAlign: "center" }}>
            
            <div
              style={{
                height: `${(val / maxVal) * 250}px`,
                width: "35px",
                background: "#06b6d4",
                borderRadius: "6px"
              }}
            ></div>

            <div style={{ marginTop: "5px" }}>{val}</div>

          </div>
        ))}
      </div>

    </div>
  );
}
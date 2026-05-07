import { useNavigate } from "react-router-dom";
import "../styles/sorting.css";

export default function Sorting() {
  const navigate = useNavigate();

  const algorithms = [
    "Selection Sort",
    "Insertion Sort",
    "Bubble Sort",
    "Merge Sort",
    "Quick Sort",
    
  ];

  return (
    <div className="sorting">
      <h1 className="heading">Sorting Algorithms</h1>
      <p className="subtext">
        Choose an algorithm to visualize and understand how it works
      </p>

      <div className="cards">
        {algorithms.map((algo, index) => (
          <div
            key={index}
            className="card"
            onClick={() =>
              navigate(`/sorting/${algo.toLowerCase().replace(/\s/g, "-")}`)
            }
          >
            <div className="tag">Sorting</div>

            <h2>{algo}</h2>
            <p>Step-by-step visualization</p>

            <span className="link">Visualize Now →</span>
          </div>
        ))}
      </div>
    </div>
  );
}
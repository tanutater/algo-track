import { useNavigate } from "react-router-dom";
import "../styles/graph.css";

export default function Graph() {
  const navigate = useNavigate();

  const algorithms = [
    {
      title: "Dijkstra",
      path: "/graph/dijkstra",
      desc: "Find shortest path from source to all nodes."
    }
  ];

  return (
    <div className="graph-page">
      <div className="graph-header">
        <h1>Graph Algorithms</h1>
        <p>Select an algorithm to visualize graph traversal.</p>
      </div>

      <div className="graph-grid">
        {algorithms.map((algo, index) => (
          <div
            key={index}
            className="graph-card"
            onClick={() => navigate(algo.path)}   // ✅ FIXED
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(algo.path);              // ✅ FIXED
              }
            }}
            tabIndex={0}
            role="button"
          >
            <div className="graph-badge">Graph</div>

            <h2>{algo.title}</h2>
            <p>{algo.desc}</p>

            <span className="graph-link">Visualize Now →</span>
          </div>
        ))}
      </div>
    </div>
  );
}
import { useState } from "react";

export default function DijkstraVisualizer() {
  const [edgesInput, setEdgesInput] = useState("");
  const [source, setSource] = useState("");
  const [activeNode, setActiveNode] = useState(null);
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [distances, setDistances] = useState({});
  const [steps, setSteps] = useState([]);

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  // Fixed node positions
  const nodePositions = {
    1: { x: 100, y: 100 },
    2: { x: 300, y: 80 },
    3: { x: 200, y: 200 },
    4: { x: 400, y: 200 },
    5: { x: 250, y: 300 },
  };

  // Parse edges safely
  const parseEdges = () => {
    return edgesInput
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => {
        const parts = line.split(/\s+/);
        if (parts.length < 3) return null;
        return {
          u: Number(parts[0]),
          v: Number(parts[1]),
          w: Number(parts[2]),
        };
      })
      .filter(Boolean);
  };

  // Build graph
  const buildGraph = (edges) => {
    const graph = {};
    edges.forEach(({ u, v, w }) => {
      if (!graph[u]) graph[u] = [];
      if (!graph[v]) graph[v] = [];

      graph[u].push({ node: v, weight: w });
      graph[v].push({ node: u, weight: w });
    });
    return graph;
  };

  // DIJKSTRA
  const runDijkstra = async () => {
    const edges = parseEdges();
    if (!edges.length || !source) return;

    const graph = buildGraph(edges);

    const dist = {};
    const visited = {};
    const stepsLog = [];

    Object.keys(graph).forEach((node) => {
      const n = Number(node);
      dist[n] = Infinity;
      visited[n] = false;
    });

    const src = Number(source);
    dist[src] = 0;

    setVisitedNodes([]);
    setDistances({});
    setSteps([]);

    const nodes = Object.keys(graph).map(Number);

    for (let i = 0; i < nodes.length; i++) {
      let u = null;

      for (let n of nodes) {
        if (!visited[n] && (u === null || dist[n] < dist[u])) {
          u = n;
        }
      }

      if (u === null || dist[u] === Infinity) break;

      setActiveNode(u);

      stepsLog.push({
        type: "select",
        desc: `Selected node ${u} (distance ${dist[u]})`,
      });

      setSteps([...stepsLog]);
      await sleep(700);

      visited[u] = true;
      setVisitedNodes((prev) => [...prev, u]);

      for (let { node: v, weight } of graph[u]) {
        const newDist = dist[u] + weight;

        if (newDist < dist[v]) {
          dist[v] = newDist;

          stepsLog.push({
            type: "update",
            desc: `Relax edge ${u} → ${v}, new dist = ${newDist}`,
          });

          setSteps([...stepsLog]);
          await sleep(500);
        }
      }

      setDistances({ ...dist });
      await sleep(300);
    }

    setActiveNode(null);
  };

  const cellStyle = {
    border: "1px solid #555",
    padding: "8px",
    textAlign: "center",
  };

  const edges = parseEdges();

  return (
    <div style={{ padding: "20px 40px", color: "white" }}>
      <h1 style={{ textAlign: "center" }}>Dijkstra Visualizer</h1>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* LEFT */}
        <div style={{ width: "70%" }}>
          <div style={{ maxWidth: "650px", margin: "0 auto", textAlign: "center" }}>
            
            {/* INPUT */}
            <textarea
              placeholder={"1 2 4\n1 3 2\n3 2 1"}
              value={edgesInput}
              onChange={(e) => setEdgesInput(e.target.value)}
              style={{
                width: "100%",
                height: "120px",
                padding: "10px",
                marginBottom: "10px",
              }}
            />

            <input
              placeholder="Source node"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              style={{ padding: "10px", marginBottom: "10px" }}
            />

            <br />
            <button onClick={runDijkstra}>Run</button>

            {/* GRAPH */}
            <svg width="520" height="350" style={{ marginTop: "20px" }}>
              
              {/* EDGES */}
              {edges.map(({ u, v, w }, i) => {
                if (!nodePositions[u] || !nodePositions[v]) return null;

                return (
                  <g key={i}>
                    <line
                      x1={nodePositions[u].x}
                      y1={nodePositions[u].y}
                      x2={nodePositions[v].x}
                      y2={nodePositions[v].y}
                      stroke="#888"
                      strokeWidth="2"
                    />

                    {/* WEIGHT */}
                    <text
                      x={(nodePositions[u].x + nodePositions[v].x) / 2}
                      y={(nodePositions[u].y + nodePositions[v].y) / 2}
                      fill="white"
                      fontSize="12"
                    >
                      {w}
                    </text>
                  </g>
                );
              })}

              {/* NODES */}
              {Object.keys(nodePositions).map((k) => {
                const n = Number(k);

                return (
                  <g key={n}>
                    <circle
                      cx={nodePositions[n].x}
                      cy={nodePositions[n].y}
                      r="22"
                      fill={
                        n === activeNode
                          ? "red"
                          : visitedNodes.includes(n)
                          ? "green"
                          : "#7c3aed"
                      }
                    />
                    <text
                      x={nodePositions[n].x}
                      y={nodePositions[n].y + 5}
                      textAnchor="middle"
                      fill="white"
                    >
                      {n}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* DISTANCES */}
            {Object.keys(distances).length > 0 && (
              <div>
                <h3>Distances</h3>
                {Object.entries(distances).map(([node, d]) => (
                  <p key={node}>
                    Node {node} → {d === Infinity ? "∞" : d}
                  </p>
                ))}
              </div>
            )}

            {/* TABLE */}
            {steps.length > 0 && (
              <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={cellStyle}>Step</th>
                    <th style={cellStyle}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {steps.map((s, i) => (
                    <tr key={i}>
                      <td style={cellStyle}>{i + 1}</td>
                      <td style={cellStyle}>{s.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ width: "25%", borderLeft: "1px solid #444", padding: "20px" }}>
          <h2>Complexity</h2>
          <p><strong>Time:</strong> O(V²)</p>
          <p><strong>Space:</strong> O(V)</p>
        </div>
      </div>
    </div>
  );
}
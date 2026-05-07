import { useNavigate } from "react-router-dom";
import "../styles/queue.css";

export default function Queue() {
  const navigate = useNavigate();

  const operations = [
  {
    title: "Operations",
    path: "/queue/operations",   // ✅ FIXED
    desc: "Add / Remove an element to the rear of the queue.",
  },
];

  return (
    <div className="queue-page">
      <div className="queue-header">
        <h1>Queue Operations</h1>
        <p>Select an operation to visualize how queue works.</p>
      </div>

      <div className="queue-grid">
        {operations.map((op, index) => (
          <div
            key={index}
            className="queue-card"
            onClick={() =>
              navigate(`/queue/${op.title.toLowerCase().split(" ")[0]}`)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/queue/${op.title.toLowerCase().split(" ")[0]}`);
              }
            }}
            tabIndex={0}
            role="button"
          >
            <div className="queue-badge">Queue</div>

            <h2>{op.title}</h2>
            <p>{op.desc}</p>

            <span className="queue-link">Visualize Now →</span>
          </div>
        ))}
      </div>
    </div>
  );
}
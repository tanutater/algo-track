import { useNavigate } from "react-router-dom";
import "../styles/stack.css";

export default function Stack() {
  const navigate = useNavigate();

  const operations = [
    {
      title: "Operations",
      path: "/stack/operations",   // ✅ ADD PATH
      desc: "Insert / Delete an element at the top of the stack.",
    },
  ];

  return (
    <div className="stack-page">
      <div className="stack-header">
        <h1>Stack Operations</h1>
        <p>Select an operation to visualize stack behavior (LIFO).</p>
      </div>

      <div className="stack-grid">
        {operations.map((op, index) => (
          <div
            key={index}
            className="stack-card"
            onClick={() => navigate(op.path)}   // ✅ FIXED
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(op.path);              // ✅ FIXED
              }
            }}
            tabIndex={0}
            role="button"
          >
            <div className="stack-badge">Stack</div>

            <h2>{op.title}</h2>
            <p>{op.desc}</p>

            <span className="stack-link">Visualize Now →</span>
          </div>
        ))}
      </div>
    </div>
  );
}
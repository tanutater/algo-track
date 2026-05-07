import { useNavigate } from "react-router-dom";
import "../styles/stack.css"; // you can reuse same styling

export default function Tree() {
  const navigate = useNavigate();

  const traversals = [
    {
      title: "Preorder",
      desc: "Visit root → left subtree → right subtree.",
    },
    {
      title: "Inorder",
      desc: "Visit left subtree → root → right subtree.",
    },
    {
      title: "Postorder",
      desc: "Visit left subtree → right subtree → root.",
    },
  ];

  return (
    <div className="stack-page">
      <div className="stack-header">
        <h1>Tree Traversals</h1>
        <p>Select a traversal to visualize how tree is processed.</p>
      </div>

      <div className="stack-grid">
        {traversals.map((t, index) => (
          <div
            key={index}
            className="stack-card"
            onClick={() =>
              navigate(`/tree/${t.title.toLowerCase()}`)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/tree/${t.title.toLowerCase()}`);
              }
            }}
            tabIndex={0}
            role="button"
          >
            <div className="stack-badge">Tree</div>

            <h2>{t.title}</h2>
            <p>{t.desc}</p>

            <span className="stack-link">Visualize Now →</span>
          </div>
        ))}
      </div>
    </div>
  );
}
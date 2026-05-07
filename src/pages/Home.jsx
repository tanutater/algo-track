import "../styles/home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="hero">
        <div className="badge">Welcome to the Future of Learning</div>

        <h1 className="title">AlgoTrack</h1>

        <h3 className="subtitle">
          Visualize. Understand. Master Algorithms.
        </h3>

        <p className="desc">
          Transform complex data structures and algorithms into intuitive,
          interactive visualizations. Learn by seeing, not just reading.
        </p>

        <div className="buttons">
          <button
            className="primary"
            onClick={() => navigate("/dashboard")}
          >
            Start Visualizing →
          </button>

          <button className="secondary">Explore Features</button>
        </div>
      </div>
    </div>
  );
}
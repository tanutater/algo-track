import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1 className="heading">Algorithm Categories</h1>

      <div className="cards">

        <div className="card" onClick={() => navigate("/sorting")}>
          <h2>Sorting</h2>
        </div>

        <div className="card" onClick={() => navigate("/stack")}>
          <h2>Stack</h2>
        </div>

        <div className="card" onClick={() => navigate("/queue")}>
          <h2>Queue</h2>
        </div>

        <div className="card" onClick={() => navigate("/graph")}>
          <h2>Graph</h2>
        </div>
        {/* <div className="card" onClick={() => navigate("/tree")}>
          <h2>Tree</h2>
        </div> */}
      </div>
    </div>
  );
}
import "../styles/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      {/* LEFT */}
      <div className="footer-left">
        <div className="logo">
          <div className="logo-icon">{`</>`}</div>
          <span>AlgoTrack</span>
        </div>

        <p>
          Empowering developers and students to master algorithms through
          interactive visualizations and hands-on learning experiences.
        </p>
      </div>

      {/* CENTER */}
      <div className="footer-center">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>

    </footer>
  );
}
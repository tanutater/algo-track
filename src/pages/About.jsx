import "../styles/about.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="about-title">About AlgoTrack</h1>

        <p className="about-subtitle">
         Learn Data Structures and Algorithms through interactive visualizations.
        </p>

        <div className="about-section">
          <h2>🚀 What is AlgoTrack?</h2>
          <p>
            AlgoTrack is a modern DSA visualization platform built to simplify complex algorithms and data structures. Instead of memorizing dry theory, users can visually understand how algorithms behave in real-time.
          </p>
        </div>

        <div className="about-section">
          <h2>🎯 Our Mission</h2>
          <p>
            Our mission is to make DSA learning easier, more interactive, and less intimidating for students, beginners, and coding enthusiasts. We believe learning becomes powerful when concepts can be seen and experienced visually.
          </p>
        </div>

        <div className="about-section">
          <h2>📚 Features</h2>
          <ul>
            <li>nteractive Sorting Visualizers</li>
            <li>Graph Algorithm Simulations</li>
            <li>Stack and Queue Operations</li>
            <li>Tree Traversal Visualizations</li>
            <li>Step-by-step Algorithm Execution</li>
            <li>Clean UI for Better Learning Experience</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>🧠 Why AlgoTrack?</h2>
          <p>
            Many learners struggle with algorithms because they are difficult to imagine mentally. AlgoTrack bridges that gap using animations, visualization, and interactive controls that help users truly understand the logic behind every step.
          </p>
        </div>

        <div className="about-section">
          <h2>💻 Technologies Used</h2>
          <p>
            React.js, JavaScript, CSS, React Router, and custom algorithm visualizers.
          </p>
        </div>
      </div>
    </div>
  );
}
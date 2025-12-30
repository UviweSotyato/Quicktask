// src/pages/Home.tsx
import "../index.css";

function Home() {
  return (
    <section className="home">
      {/* HERO */}
      <div className="home-content">
        <h1 className="home-title">
          Welcome to <span>Quicktask</span>
        </h1>

        <p className="home-tagline">
          Your calm space to plan, focus, and get things done.
        </p>

        <p className="home-description">
          Quicktask helps you organize your workflow, reduce mental clutter,
          and stay productive without distractions.
        </p>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="feature-card">
          <h3>⚡ Fast & Simple</h3>
          <p>
            Create and manage tasks instantly with a clean, minimal interface.
          </p>
        </div>

        <div className="feature-card">
          <h3>🎯 Stay Focused</h3>
          <p>
            Designed to reduce noise and help you focus on what actually matters.
          </p>
        </div>

        <div className="feature-card">
          <h3>📅 Organized Workflow</h3>
          <p>
            Keep track of your progress and manage tasks with clarity.
          </p>
        </div>
      </div>

      {/* STATS / VALUE STRIP */}
      <div className="stats">
        <div className="stat">
          <h2>⚙️ Simple</h2>
          <p>No unnecessary complexity</p>
        </div>

        <div className="stat">
          <h2>⚡ Fast</h2>
          <p>Optimized for speed & clarity</p>
        </div>

        <div className="stat">
          <h2>🧠 Focused</h2>
          <p>Built to reduce distraction</p>
        </div>
      </div>
    </section>
  );
}

export default Home;

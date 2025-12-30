// src/components/Hero.tsx
import "../index.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-layout">

        {/* LEFT CONTENT */}
        <div className="hero-main">
          <h1 className="hero-title">
            Turn plans into <span>progress</span>
          </h1>

          <p className="hero-subtitle">
            Quicktask helps you stay organized, reduce mental clutter,
            and focus on what actually matters — one task at a time.
          </p>

          <div className="hero-actions">
            <button className="hero-btn primary">Create Task</button>
            <button className="hero-btn secondary">View Tasks</button>
          </div>
        </div>

        {/* RIGHT ASIDE */}
        <aside className="hero-aside">
          <div className="aside-card">
            <h3>Today’s Focus</h3>
            <p>Plan smarter. Finish faster. Stay consistent.</p>
          </div>

          <div className="aside-card highlight">
            <h3>Productivity Boost</h3>
            <p>Designed to remove noise and keep your workflow clean.</p>
          </div>

          <div className="aside-stats">
            <div className="stat-box">
              <h2>⚡ Fast</h2>
              <p>Minimal & responsive UI</p>
            </div>

            <div className="stat-box">
              <h2>🎯 Focused</h2>
              <p>No distractions</p>
            </div>

            <div className="stat-box">
              <h2>🧠 Smart</h2>
              <p>Simple task flow</p>
            </div>
          </div>
        </aside>
      </div>

      {/* FEATURE STRIP */}
      <div className="features">
        <div className="feature-card">
          <h3>Clean Task Management</h3>
          <p>
            Create, track, and manage tasks with zero clutter and maximum clarity.
          </p>
        </div>

        <div className="feature-card">
          <h3>Designed for Focus</h3>
          <p>
            Every element is intentional — no noise, just productivity.
          </p>
        </div>

        <div className="feature-card">
          <h3>Fast & Lightweight</h3>
          <p>
            Built to load instantly and feel smooth on any device.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

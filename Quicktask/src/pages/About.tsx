// src/components/About.tsx
import React from "react";

export default function About() {
  return (
    <section className="about">
      <div className="about-container reveal">

        {/* About Text */}
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I’m a passionate computer science student, developer, and
            problem-solver. I love building creative and futuristic web
            experiences, exploring new tech, and turning ideas into reality.
          </p>
          <p className="about-description">
            My goal is to create projects that are visually stunning,
            interactive, and meaningful. I’m always learning and challenging
            myself to improve every day.
          </p>
        </div>
      </div>
    </section>
  );
}

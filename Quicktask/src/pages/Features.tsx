// src/components/Features.tsx
import React from "react";

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Fast & Responsive",
    description: "Lightning-fast performance across all devices with smooth animations.",
  },
  {
    title: "Dark Mode Ready",
    description: "Switch to dark mode seamlessly, protecting your eyes at night.",
  },
  {
    title: "Interactive UI",
    description: "Dynamic effects and glowing animations to enhance user engagement.",
  },
  {
    title: "Customizable",
    description: "Easily tweak themes, features, and layouts to fit your style.",
  },
  {
    title: "Secure",
    description: "Built with best practices to protect your data and privacy.",
  },
  {
    title: "Cloud Sync",
    description: "Your data stays synced across all devices in real-time.",
  },
];

export default function Features() {
  return (
    <section className="features">
      {features.map((feature, index) => (
        <div className="feature-card reveal" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

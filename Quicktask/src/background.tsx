import { useMemo } from "react";

type Glow = {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

export default function Background() {
  const glows = useMemo<Glow[]>(() => {
    return Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
      size: 260 + Math.random() * 240,
      duration: 18 + Math.random() * 20,
      delay: Math.random() * 6,
      opacity: 0.18 + Math.random() * 0.15,
    }));
  }, []);

  const particles = useMemo(() => Array.from({ length: 35 }), []);

  return (
    <>
      {/* Ambient glowing blobs */}
      <div className="background-ambient">
        {glows.map(glow => (
          <div
            key={glow.id}
            className="glow dynamic"
            style={{
              top: glow.top,
              left: glow.left,
              width: glow.size,
              height: glow.size,
              opacity: glow.opacity,
              animationDuration: `${glow.duration}s`,
              animationDelay: `${glow.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="particles">
        {particles.map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${14 + Math.random() * 22}s`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.7,
            }}
          />
        ))}
      </div>
    </>
  );
}

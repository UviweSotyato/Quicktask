import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hero from "./pages/Hero";
import Background from "./background";
// Import confetti if you want the party command
import confetti from "canvas-confetti";

export default function App() {
  const [commandOpen, setCommandOpen] = useState(false);

  /* ===============================
     KONAMI / DEV MODE
  =============================== */
  useEffect(() => {
    const code = [
      "ArrowUp", "ArrowUp",
      "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight",
      "ArrowLeft", "ArrowRight",
      "b", "a",
    ];

    let index = 0;

    const handler = (e: KeyboardEvent) => {
      if (e.key === code[index]) {
        index++;
        if (index === code.length) {
          document.body.classList.toggle("dev-mode");
          alert("✨ Developer mode toggled.");
          index = 0;
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* ===============================
     SCROLL PROGRESS BAR
  =============================== */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / height) * 100;
      const bar = document.querySelector(".scroll-progress") as HTMLElement;
      if (bar) bar.style.width = `${progress}%`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===============================
     CURSOR GLOW FOLLOW
  =============================== */
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    const move = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      glow.remove();
    };
  }, []);

  /* ===============================
     PARALLAX GLOW VARIABLES
  =============================== */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--mx",
        `${(e.clientX / window.innerWidth - 0.5) * 20}px`
      );
      document.documentElement.style.setProperty(
        "--my",
        `${(e.clientY / window.innerHeight - 0.5) * 20}px`
      );
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* ===============================
     COMMAND PALETTE (CTRL + K)
  =============================== */
  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, []);

  return (
    <>
      <Background />
      <div className="scroll-progress" />

      <Navbar />
      <Home />
      <Hero />

      {/* Command Palette */}
      {commandOpen && (
        <div
          className="command-overlay"
          onClick={() => setCommandOpen(false)}
        >
          <div
            className="command-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Quick Command</h3>
            <input
              autoFocus
              placeholder="Type a command..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const command = e.currentTarget.value.toLowerCase().trim();

                  switch (command) {
                    case "theme":
                      document.body.classList.toggle("light-mode");
                      alert("✨ Theme toggled!");
                      break;
                    case "rainbow":
                      document.body.classList.toggle("rainbow-text");
                      alert("🌈 Rainbow mode toggled!");
                      break;
                    case "party":
                      confetti({ particleCount: 150, spread: 70 });
                      alert("🎉 Party time!");
                      break;
                    case "surprise":
                      const img = document.createElement("img");
                      img.src = "/meme.png";
                      img.style.position = "fixed";
                      img.style.top = "50%";
                      img.style.left = "50%";
                      img.style.transform = "translate(-50%, -50%)";
                      img.style.zIndex = "9999";
                      img.style.width = "300px";
                      document.body.appendChild(img);
                      setTimeout(() => img.remove(), 5000);
                      break;
                    case "sound":
                      const audio = new Audio("/secret-sound.mp3");
                      audio.play();
                      break;
                    case "trail":
                      document.body.classList.toggle("cursor-trail");
                      break;
                    default:
                      alert("❌ Unknown command");
                  }

                  setCommandOpen(false);
                  e.currentTarget.value = "";
                }
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

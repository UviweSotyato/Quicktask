// src/components/Navbar.tsx

import { useState, useEffect } from "react";
import '../index.css'

function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = ["Home", "Features", "About", "Contact"];

  return (
    <nav className="navbar">
      <div className="brand">Quicktask</div>

      {/* Desktop Menu */}
      {!isMobile && (
        <div className="desktop-menu">
          {menuItems.map((item) => (
            <div
              key={item}
              className={`nav-item ${active === item ? "active" : ""}`}
              onClick={() => setActive(item)}
            >
              {item}
            </div>
          ))}

          <button className="cta-button">Get Started</button>
        </div>
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {menuItems.map((item) => (
            <div
              key={item}
              className={`nav-item ${active === item ? "active" : ""}`}
              onClick={() => {
                setActive(item);
                setMenuOpen(false);
              }}
            >
              {item}
            </div>
          ))}

          <button className="cta-button mobile-cta">Get Started</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

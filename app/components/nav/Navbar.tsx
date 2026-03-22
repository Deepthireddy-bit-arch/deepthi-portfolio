
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <style>{`


        // .nav-root {
        //   position: fixed;
        //   top: 0;
        //   left: 0;
        //   right: 0;
        //   z-index: 1000;
       
        //   padding: 0 1.5rem;
        //   transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        // }
 .nav-root {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;

  padding: 0;          /* ← remove the 0 1.5rem, move it to nav-inner */
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-inner {
  max-width: 1580px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 999px;
  padding: 0 1.5rem 0 1.75rem;
  margin-top: 14px;
  margin-left: 1.5rem;   /* ← add this */
  margin-right: 1.5rem;  /* ← add this */
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1.5px solid rgba(255,255,255,0.9);
}

        .nav-root.scrolled .nav-inner {
          box-shadow:
            0 8px 32px rgba(255, 107, 0, 0.12),
            0 2px 12px rgba(0, 0, 0, 0.08);
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-color: rgba(255, 107, 0, 0.15);
        }

        /* Logo */
        .nav-logo {
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          text-decoration: none;
          cursor: pointer;
          flex-shrink: 0;
          user-select: none;
        }
        .nav-logo-first { color: #1a1a2e; }
        .nav-logo-last {
          color: #ff6b00;
          position: relative;
          display: inline-block;
        }
        .nav-logo-last::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #ff6b00;
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .nav-logo:hover .nav-logo-last::after { transform: scaleX(1); }

        /* Desktop links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-link-item { position: relative; }
        .nav-link {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          color: #555;
          padding: 0.5rem 0.85rem;
          border-radius: 999px;
          display: block;
          transition: color 0.25s ease, background 0.25s ease;
          position: relative;
          cursor: pointer;
        }
        .nav-link:hover { color: #ff6b00; background: rgba(255, 107, 0, 0.07); }
        .nav-link.active {
          color: #ff6b00;
          font-weight: 600;
        }
        .nav-link.active::before {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #ff6b00;
        }

        /* Resume button */
        .nav-resume {
          background: linear-gradient(135deg, #ff6b00 0%, #ff8c38 100%);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.55rem 1.3rem;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 0 4px 14px rgba(255, 107, 0, 0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          flex-shrink: 0;
        }
        .nav-resume:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 24px rgba(255, 107, 0, 0.5);
          background: linear-gradient(135deg, #e85f00 0%, #ff7a20 100%);
        }
        .nav-resume:active { transform: translateY(0) scale(0.98); }

        /* Hamburger */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          background: none;
          border: none;
          outline: none;
        }
        .hamburger-line {
          width: 22px;
          height: 2px;
          background: #1a1a2e;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: block;
        }
        .nav-hamburger.open .hamburger-line:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
          background: #ff6b00;
        }
        .nav-hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0; transform: scaleX(0);
        }
        .nav-hamburger.open .hamburger-line:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
          background: #ff6b00;
        }

        /* Mobile menu */
        .nav-mobile {
          position: absolute;
          top: calc(100% + 10px);
          left: 1.5rem;
          right: 1.5rem;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1.5px solid rgba(255, 107, 0, 0.15);
          box-shadow: 0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(255,107,0,0.1);
          overflow: hidden;
          transform-origin: top center;
          animation: mobileMenuIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          padding: 1rem;
        }

        @keyframes mobileMenuIn {
          from { opacity: 0; transform: scaleY(0.85) translateY(-10px); }
          to   { opacity: 1; transform: scaleY(1) translateY(0); }
        }

        .nav-mobile-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .nav-mobile-link {
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: #444;
          text-decoration: none;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .nav-mobile-link:hover, .nav-mobile-link.active {
          color: #ff6b00;
          background: rgba(255, 107, 0, 0.07);
        }
        .nav-mobile-link .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #ff6b00;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .nav-mobile-link.active .dot { opacity: 1; }
        .nav-mobile-divider {
          height: 1px;
          background: rgba(255,107,0,0.12);
          margin: 0.5rem 0;
        }
        .nav-mobile-resume {
          width: 100%;
          background: linear-gradient(135deg, #ff6b00, #ff8c38);
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.8rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(255, 107, 0, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-decoration: none;
          display: block;
          text-align: center;
        }
        .nav-mobile-resume:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(255, 107, 0, 0.45);
        }

        /* Entrance animation for desktop nav */
        @keyframes navSlideDown {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-inner { animation: navSlideDown 0.55s cubic-bezier(0.34, 1.3, 0.64, 1) both; }

        @media (max-width: 768px) {
          .nav-links, .nav-resume { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>


      <nav
        className={`nav-root${scrolled ? " scrolled" : ""}`}
        role="navigation"
        aria-label="Main navigation"
        ref={menuRef}
      >
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <span className="nav-logo-first">Doddipalli </span>
            <span className="nav-logo-last">Deepthi</span>
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label} className="nav-link-item">
                <Link
                  href={href}
                  className={`nav-link${pathname === href ? " active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a href="/resume" className="nav-resume" rel="noopener noreferrer">
            {/* <svg width="12" height="13" viewBox="0 0 12 13" fill="none">
              <path d="M6 1v7.5M6 8.5l-2.5-2.5M6 8.5L8.5 6M1.5 10.5h9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg> */}
            Resume
          </a>

          {/* Hamburger */}
          <button
            className={`nav-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="nav-mobile">
            <ul className="nav-mobile-links">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={`nav-mobile-link${pathname === href ? " active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                    <span className="dot" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="nav-mobile-divider" />
            <a
              href="/assets/resume.pdf"
              className="nav-mobile-resume"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              ↓ Download Resume
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
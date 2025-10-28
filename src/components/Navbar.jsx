import React, { useEffect, useState, useCallback } from "react";
import OpenAccountModal from "./OpenAccountModal.jsx";

const NAVBAR_HEIGHT = 64;

const scrollToWithOffset = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
  const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  window.scrollTo({ top: y, behavior: prefersReduced ? "auto" : "smooth" });
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNav = useCallback((id) => {
    setMenuOpen(false);
    scrollToWithOffset(id);
  }, []);

  return (
    <>
      {/* Global safety: never allow horizontal overflow */}
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          max-width: 100%;
          overflow-x: hidden;
        }
        @supports (overflow-x: clip) {
          html, body { overflow-x: clip; } /* better than hidden where supported */
        }
      `}</style>

      <nav className="td-navbar" aria-label="Main navigation">
        <div className="td-navbar__inner">
          <div className="td-navbar__left">
            <button
              className="td-navbar__toggle"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              aria-controls="td-mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span aria-hidden="true" className="td-navbar__hambox">
                <span className={`td-navbar__hamline ${menuOpen ? "open" : ""}`} />
              </span>
            </button>

            <div className="td-navbar__brand" aria-hidden="true">TD Mockup</div>

            <ul className="td-navbar__links">
              <li><button onClick={() => handleNav("main-graphic")} className="td-navlink">Welcome</button></li>
              <li><button onClick={() => handleNav("credit-card-graphic")} className="td-navlink">Debit Cards</button></li>
              <li><button onClick={() => handleNav("services-graphic")} className="td-navlink">Investing</button></li>
              <li><button onClick={() => handleNav("support-graphic")} className="td-navlink">Support</button></li>
            </ul>
          </div>

          <div className="td-navbar__actions">
            <button className="td-btn td-btn--ghost">Sign in</button>
            <button className="td-btn td-btn--primary" onClick={() => setIsOpen(true)}>
              Open account
            </button>
          </div>
        </div>

        {/* Mobile drawer (locked to viewport width) */}
        <div
          id="td-mobile-menu"
          className={`td-drawer ${menuOpen ? "open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <ul className="td-drawer__list">
            <li><button onClick={() => handleNav("main-graphic")} className="td-drawer__link">Welcome</button></li>
            <li><button onClick={() => handleNav("credit-card-graphic")} className="td-drawer__link">Debit Cards</button></li>
            <li><button onClick={() => handleNav("services-graphic")} className="td-drawer__link">Investing</button></li>
            <li><button onClick={() => handleNav("support-graphic")} className="td-drawer__link">Support</button></li>
          </ul>
        </div>
      </nav>

      <div className="td-navbar__spacer" aria-hidden="true" />
      <OpenAccountModal open={isOpen} onClose={() => setIsOpen(false)} />

      <style>{`
        :root { --td-navbar-height: 64px; --td-green:#007a3d; }

        .td-navbar {
          position: fixed;
          top: 0; left: 0; right: 0;           /* no 100vw; avoids scrollbar width bug */
          height: var(--td-navbar-height);
          width: 100%;
          background: var(--td-green); color: #fff; z-index: 1000;
          box-shadow: 0 2px 6px rgba(0,0,0,0.12);
          box-sizing: border-box;              /* padding never pushes width over 100% */
          overflow: visible;                    /* ensure shadow doesn't force layout */
        }

        .td-navbar__inner{
          height: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
          display:flex; align-items:center; justify-content:space-between; gap:16px;
          width: 100%;
          box-sizing: border-box;              /* keep padding safe */
        }

        .td-navbar__spacer { height: var(--td-navbar-height); }

        .td-navbar__left { display:flex; align-items:center; gap:16px; min-width: 0; }

        .td-navbar__brand { font-weight:700; font-size:1.125rem; letter-spacing:.3px; white-space:nowrap; }

        .td-navbar__links{
          list-style:none; margin:0; padding:0; display:flex; gap:8px;
          overflow: hidden; flex-wrap: wrap;      /* wrap instead of overflowing horizontally */
        }
        .td-navbar__links .td-navlink{
          background:none; border:none; color:#fff; font:inherit; cursor:pointer;
          padding:8px 10px; border-radius:6px; font-size:.95rem; white-space:nowrap;
        }
        .td-navbar__links .td-navlink:hover,
        .td-navbar__links .td-navlink:focus{ background:rgba(255,255,255,.08); outline:none; }

        .td-navbar__actions{ display:flex; gap:8px; align-items:center; flex: 0 0 auto; }
        .td-btn{ font-size:.95rem; padding:8px 12px; border-radius:6px; cursor:pointer; border:0; }
        .td-btn--ghost{ background:transparent; color:#fff; border:1px solid rgba(255,255,255,.18); }
        .td-btn--primary{ background:#fff; color:var(--td-green); font-weight:600; }

        /* Hamburger */
        .td-navbar__toggle{
          display:none; border:0; background:transparent; padding:6px; border-radius:6px; cursor:pointer;
          flex: 0 0 auto;
        }
        .td-navbar__hambox{ display:inline-block; width:24px; height:18px; position:relative; }
        .td-navbar__hamline,
        .td-navbar__hamline::before,
        .td-navbar__hamline::after{
          position:absolute; left:0; right:0; height:2px; background:#fff; content:"";
          transition: transform .25s ease, opacity .2s ease;
        }
        .td-navbar__hamline{ top:8px; }
        .td-navbar__hamline::before{ top:-8px; }
        .td-navbar__hamline::after{ top:8px; }
        .td-navbar__hamline.open{ background:transparent; }
        .td-navbar__hamline.open::before{ transform: translateY(8px) rotate(45deg); }
        .td-navbar__hamline.open::after{ transform: translateY(-8px) rotate(-45deg); }

        /* Drawer — hard clamp to viewport */
        .td-drawer{
          position: fixed;
          top: var(--td-navbar-height);
          left: 0; right: 0;
          width: 100%;                         /* never exceed viewport */
          max-width: 100vw;                    /* guard against iOS quirks */
          background:#0a6b34;
          transform: translateY(-8px);
          opacity:0; pointer-events:none;
          transition: transform .2s ease, opacity .2s ease;
          box-shadow: 0 8px 18px rgba(0,0,0,.16);
          box-sizing: border-box;
        }
        .td-drawer.open{ transform: translateY(0); opacity:1; pointer-events:auto; }
        .td-drawer__list{
          list-style:none; margin:0; padding:10px;
          display:flex; flex-direction:column; gap:4px;
          max-width: 1200px; margin-left:auto; margin-right:auto;
        }
        .td-drawer__link{
          width:100%; text-align:left; background:transparent; border:0; color:#fff; font:inherit; cursor:pointer;
          padding:12px; border-radius:6px;
        }
        .td-drawer__link:hover, .td-drawer__link:focus{ background:rgba(255,255,255,.08); outline:none; }

        /* Responsive */
        @media (max-width: 720px){
          :root { --td-navbar-height: 56px; }
          .td-navbar__links{ display:none; }
          .td-navbar__brand{ font-size:1rem; }
          .td-btn{ padding:7px 10px; font-size:.9rem; }
          .td-navbar__toggle{ display:inline-flex; }
        }
      `}</style>
    </>
  );
}

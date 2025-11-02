// src/components/OpenAccountModal.jsx
import React, { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

const brand = "#007a3d";

export default function OpenAccountModal({ open, onClose }) {
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Scroll lock while open
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  // Focus first field when open
  useEffect(() => {
    if (open) firstFieldRef.current?.focus();
  }, [open]);

  // Simple focus trap inside the dialog
  const trapFocus = useCallback((e) => {
    if (e.key !== "Tab") return;
    const root = dialogRef.current;
    if (!root) return;

    const focusables = root.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  if (!open) return null;

  // Click backdrop to close; stop events inside
  const onBackdropMouseDown = () => onClose?.();
  const stop = (e) => e.stopPropagation();

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up real submit
    onClose?.(); // demo: close after submit
  };

  return createPortal(
    <div
      onMouseDown={onBackdropMouseDown}
      style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        placeItems: "center",
        background: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(4px)",
        zIndex: 99999,
      }}
    >
      <div
        ref={dialogRef}
        onMouseDown={stop}
        onKeyDown={trapFocus}
        role="dialog"
        aria-modal="true"
        aria-labelledby="oa-title"
        aria-describedby="oa-desc"
        style={{
          width: "min(92vw, 640px)",
          borderRadius: 16,
          overflow: "hidden",
          background: "#ffffff",
          boxShadow: "0 16px 48px rgba(0,0,0,0.45)",
          animation: "modalRise 240ms ease-out",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 18px",
            background: brand,
            color: "#fff",
          }}
        >
          <h2 id="oa-title" style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>
            Open an Account
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "rgba(255,255,255,0.2)",
              border: 0,
              color: "#fff",
              borderRadius: 8,
              padding: "6px 10px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: 20 }}>
          <p
            id="oa-desc"
            style={{
              margin: "0 0 16px 0",
              color: "#333",
              fontSize: 14,
              lineHeight: 1.4,
            }}
          >
            Create your profile to get started. We’ll send a confirmation to your email.
          </p>

          <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: 14, color: "#222", fontWeight: 600 }}>Email</span>
              <input
                ref={firstFieldRef}
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                style={inputStyle}
              />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: 14, color: "#222", fontWeight: 600 }}>Full name</span>
              <input
                type="text"
                name="fullName"
                required
                autoComplete="name"
                placeholder="Jane Doe"
                style={inputStyle}
              />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: 14, color: "#222", fontWeight: 600 }}>Password</span>
              <input
                type="password"
                name="password"
                required
                autoComplete="new-password"
                placeholder="Create a strong password"
                style={inputStyle}
              />
            </label>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: 12,
                fontSize: 16,
                background: brand,
                color: "#fff",
                border: 0,
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              Create account
            </button>
          </form>
        </div>
      </div>

      {/* keyframes inline to avoid CSS collisions */}
      <style>{`
        @keyframes modalRise {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes modalRise { from { opacity: 0; } to { opacity: 1; } }
        }
      `}</style>
    </div>,
    document.body
  );
}

const inputStyle = {
  background: "#fff",
  color: "#111",
  width: "100%",
  padding: "10px 12px",
  fontSize: 16,
  borderRadius: 8,
  border: "1px solid #d7d7d7",
  boxSizing: "border-box",
  outline: "none",
  transition: "border-color .15s ease, box-shadow .15s ease",

};

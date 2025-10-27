// src/components/OpenAccountModal.jsx
import React from "react";
import { createPortal } from "react-dom";

const brand = "#007a3d";

export default function OpenAccountModal({ open, onClose }) {
  if (!open) return null;

  const stop = (e) => e.stopPropagation();

  return createPortal(
    <div
      onMouseDown={onClose} // click outside closes
      style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        placeItems: "center",
        background: "rgba(0,0,0,0.40)", // DARK overlay so you cannot miss it
        backdropFilter: "blur(4px)",
        zIndex: 99999, // sits above everything
      }}
    >
      <div
        onMouseDown={stop} // don't close when clicking inside
        role="dialog"
        aria-modal="true"
        aria-labelledby="oa-title"
        style={{
          width: "min(90vw, 600px)",
          borderRadius: 16,
          overflow: "hidden",
          background: "#ffffff",
          boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
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

        <div style={{ padding: 20, color: "#f4f4f4" }}>
          <p style={{ margin: 0 }}>
            <input className="registry-text-field" type="email" placeholder="Email address" style={{ background: "#fff", color: "#fff", width: "100%", padding: 10, fontSize: 16, marginBottom: 12, boxSizing: "border-box" }} />
            <input type="full name" placeholder="Full Name" style={{ background: "#fff", width: "100%", padding: 10, fontSize: 16, marginBottom: 12, boxSizing: "border-box" }} />
            <input type="password" placeholder="Create a Password" style={{ background: "#fff", width: "100%", padding: 10, fontSize: 16, marginBottom: 20, boxSizing: "border-box" }} />
            <button type="submit" style={{ width: "100%", padding: 12, fontSize: 16, background: brand, color: "#fff", border: 0, borderRadius: 8, cursor: "pointer" }}>
              Create Account
            </button>
          
                
          </p>
        </div>
      </div>

      {/* keyframes inline to avoid CSS collisions */}
      <style>{`
        @keyframes modalRise {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>,
    document.body
  );
}

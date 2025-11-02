import React from "react";

const brand = "#007a3d"; // TD green

function openEmail() {
  const to = "support@yourbankmock.ca";
  const subject = encodeURIComponent("Support Request – TD Mock");
  const body = encodeURIComponent(
    `Hi Support,

I need help with:

• 
• 

Browser: ${navigator.userAgent}
`
  );
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}

const SupportGraphic = ({
  className = "",
  title = "Where Money Meets Trust.",
  width = "100%",
  height = "100dvh", // better mobile behavior than 100vh
  imageSrc,          // optional: if provided, shows on the right inside the SVG mask
}) => {
  return (
    <section id ="support-graphic"
      className={className}
      style={{
        width,
        height,
        minHeight: "100dvh",
        display: "grid",
        gridTemplateColumns: "minmax(280px, 540px) 1fr",
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* LEFT: text column */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(16px, 3vw, 40px)",
          gap: "clamp(8px, 1.5vw, 16px)",
          borderRight: `6px solid ${brand}`,
          background: "#fff",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            color: brand,
            fontWeight: 700,
            letterSpacing: 0.4,
            fontSize: "clamp(12px, 1.4vw, 14px)",
            textTransform: "uppercase",
          }}
        >
          {/* Accent pill */}
          <span
            aria-hidden
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: 999,
              background: brand,
            }}
          />
          Support
        </div>

        <h1
          style={{
            margin: 0,
            lineHeight: 1.1,
            fontSize: "clamp(28px, 5vw, 56px)",
            color: "#0f0f0f",
            fontWeight: 800,
          }}
        >
          Our agents are available <span style={{ color: brand }}>24/7</span>
        </h1>

        <p
          style={{
            margin: 0,
            color: "#3a3a3a",
            fontSize: "clamp(14px, 1.7vw, 18px)",
            lineHeight: 1.5,
          }}
        >
          {title}
        </p>

        {/* Small meta row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: "clamp(10px, 1.5vw, 18px)",
            color: "#222",
            fontSize: "clamp(12px, 1.3vw, 14px)",
          }}
        >
          {/* Headset icon */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M12 3a7 7 0 0 1 7 7v6.5a2.5 2.5 0 0 1-2.5 2.5H14"
              stroke={brand}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 3a7 7 0 0 0-7 7v5a2 2 0 0 0 2 2h3"
              stroke={brand}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <rect
              x="7.5"
              y="10"
              width="3.5"
              height="4.5"
              rx="1.5"
              fill={brand}
              opacity="0.2"
            />
            <rect
              x="13"
              y="10"
              width="3.5"
              height="4.5"
              rx="1.5"
              fill={brand}
              opacity="0.2"
            />
            <path
              d="M14.5 18H16a2 2 0 0 0 2-2"
              stroke={brand}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          Live support • average response under 2 minutes
          
            <button
                onClick={openEmail}
                className="td-btn td-btn--ghost"
                style={{
                backgroundColor: brand,
                color: "#fff",
                border: "none",
                padding: "10px 14px",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: 600
                }}
            >
                Contact Us
            </button> 
           
        </div>
      </div>

      {/* RIGHT: vector graphic (keeps quality at any size) */}
      <div style={{ position: "relative" }}>
        <svg
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          style={{ width: "100%", height: "100%", display: "block" }}
          role="img"
          aria-label="Support graphic"
        >
          {/* white base */}
          <rect width="1200" height="800" fill="#ffffff" />

          {/* diagonal green accent */}
          <path
            d="M1200 0 L1200 800 L500 800 Z"
            fill={brand}
            opacity="0.12"
          />

          {/* green ring motif */}
          <circle cx="950" cy="200" r="120" fill="none" stroke={brand} strokeWidth="10" opacity="0.25" />
          <circle cx="1000" cy="560" r="180" fill="none" stroke={brand} strokeWidth="8" opacity="0.2" />
          <circle cx="780" cy="420" r="90" fill="none" stroke={brand} strokeWidth="6" opacity="0.25" />

          {/* headset badge (vector, crisp forever) */}
          <g transform="translate(720,280) scale(2.2)">
            <circle cx="80" cy="80" r="76" fill="#fff" />
            <circle cx="80" cy="80" r="74" fill="none" stroke={brand} strokeWidth="6" />
            <path d="M40 80a40 40 0 0 1 80 0v16" fill="none" stroke={brand} strokeWidth="6" strokeLinecap="round" />
            <rect x="30" y="72" width="20" height="30" rx="8" fill={brand} />
            <rect x="110" y="72" width="20" height="30" rx="8" fill={brand} />
            <path d="M128 108h10a12 12 0 0 0 12-12" stroke={brand} strokeWidth="6" strokeLinecap="round" />
            <circle cx="100" cy="94" r="6" fill={brand} />
          </g>

          {/* Optional raster image fill (kept sharp by covering within a mask) */}
          {imageSrc && (
            <>
              <defs>
                <clipPath id="imgClip">
                  <path d="M1200 0 L1200 800 L500 800 Z" />
                </clipPath>
              </defs>
              <image
                href={imageSrc}
                x="500"
                y="0"
                width="700"
                height="800"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#imgClip)"
              />
            </>
          )}
        </svg>

        {/* If you prefer an actual <picture> with responsive PNG/JPG instead of SVG: */}
        {/* 
        <picture style={{ position: "absolute", inset: 0 }}>
          <source
            srcSet="
              /img/supportgraphic-1200.jpg 1200w,
              /img/supportgraphic-1800.jpg 1800w,
              /img/supportgraphic-2400.jpg 2400w
            "
            sizes="(max-width: 900px) 100vw, 60vw"
          />
          <img
            src="/img/supportgraphic-1800.jpg"
            alt=""
            decoding="async"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </picture>
        */}
      </div>
    </section>
  );
};

export default SupportGraphic;

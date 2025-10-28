import React from "react";

const MainGraphic = ({
  className = "",
  title = "",
  width = "100%",
  height = "auto",
  imageSrc = "src/assets/img/maingraphic.png",
}) => {
  const computedHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <section
      id="main-graphic"
      className={className}
      style={{
        width,
        height: computedHeight,
        minHeight: "100vh",
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",
        // allow wrapping on small screens
        flexWrap: "wrap",
      }}
    >
      {/* Left: text column */}
      <div
        style={{
          flex: "1 1 380px",         // grows, shrinks, min width
          maxWidth: "560px",         // cap width on wide screens
          color: "#007a3d",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <h1
          style={{
            margin: 0,
            // scales with viewport, but bounded
            fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
            lineHeight: 1.15,
          }}
        >
          {title}
        </h1>

        <p
          className="fade-in"
          style={{
            marginTop: "12px",
            // was 45px fixed — make responsive
            fontSize: "clamp(1.25rem, 4.2vw, 2.75rem)",
            lineHeight: 1.25,
            // remove hard left padding; it breaks mobile
            paddingLeft: 0,
          }}
        >
          Online Banking &amp; Services To Meet Your Goals
        </p>
      </div>

      {/* Right: image column */}
      <div
        style={{
          flex: "2 1 520px", // larger share on desktop, wraps under on mobile
          minHeight: "40vh",
        }}
      >
        <img
          src={imageSrc}
          alt="Illustration"
          className="fade-in"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </section>
  );
};

export default MainGraphic;

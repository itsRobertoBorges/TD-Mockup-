import React from "react";
import servicesGraphicImg from "../assets/img/servicegraphic.png";
import servicesGraphicImg2 from "../assets/img/servicegraphic2.png";
import "/src/index.css";

export default function ServicesGraphic({ className = "", style = {} }) {
  const brand = "#007a3d";

  return (
    <section
      id="services-graphic"
      className={className}
      aria-labelledby="services-heading"
      style={{
        ...style,
        backgroundColor: brand,
        color: "#fff",
        padding: "28px 16px 44px",
      }}
    >
      {/* Local styles to keep it self-contained */}
      <style>{`
        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 8px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .td-cta {
          display: inline-block;
          background: #ffffff;
          color: ${brand};
          padding: 10px 16px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .td-cta:hover { transform: translateY(-1px); box-shadow: 0 4px 10px rgba(0,0,0,.18); }
        .td-cta:active { transform: translateY(0); }
        .td-cta:focus-visible { outline: 3px solid rgba(255,255,255,.6); outline-offset: 2px; }

        @media (prefers-reduced-motion: reduce) {
          .td-cta { transition: none; }
        }
      `}</style>

      {/* Headline + CTA */}
      <div className="services-container">
        <h2
          id="services-heading"
          className="fade-in"
          style={{
            margin: 0,
            fontWeight: 800,
            lineHeight: 1.05,
            fontSize: "clamp(22px, 3.5vw, 36px)",
          }}
        >
          Start Investing with Confidence Today <br />
          and Achieve Your Financial Goals
        </h2>

        <div style={{ marginTop: 12 }}>
          <a
            href="https://www.td.com/ca/en/investing/direct-investing?cm_sp=:GOOGLE:Direct+Investing+-+Targeted+-+English+(25_S_WL_WDI_AO_ACQ_EN_GEN):DIF:Brand+Keywords&gclsrc=aw.ds&gad_source=1&gad_campaignid=20455048001&gclid=CjwKCAjwx-zHBhBhEiwA7Kjq6-RdgJbUDWdONZgYHVvK2appj_7a7kBbKdc9Bpr6FRVarL_czaDnhxoCIB0QAvD_BwE"
            className="btn-animation td-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Images grid */}
      <div className="services-container" style={{ marginTop: 20 }}>
        <div className="services-grid">
          <figure
            className="fade-in"
            style={{
              margin: 0,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 16,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 260,
            }}
          >
            <img
              src={servicesGraphicImg2}
              width={1200}
              height={960}
              loading="lazy"
              decoding="async"
              alt="Advisory and automation services visualization"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                maxHeight: 420,
                objectFit: "cover",
                aspectRatio: "5 / 4",
              }}
            />
          </figure>

          <figure
            className="fade-in"
            style={{
              margin: 0,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 16,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 260,
            }}
          >
            <img
              src={servicesGraphicImg}
              width={1200}
              height={960}
              loading="lazy"
              decoding="async"
              alt="Portfolio growth and insights visualization"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                maxHeight: 420,
                objectFit: "cover",
                aspectRatio: "5 / 4",
              }}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

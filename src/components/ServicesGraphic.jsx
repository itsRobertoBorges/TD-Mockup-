import React from "react";
import servicesGraphicImg from "../assets/img/servicegraphic.png";
import servicesGraphicImg2 from "../assets/img/servicegraphic2.png";
// assumes your fade-in + any globals live here
import "/src/index.css";

export default function ServicesGraphic({ className = "", style = {} }) {
    const brand = "#007a3d";

    return (
        <section
            className={className}
            aria-labelledby="services-heading"
            style={{
                ...style,
                backgroundColor: brand,
                color: "#fff",
                // keep content centered and readable on large screens
                padding: "24px 16px 40px",
            }}
        >
         

            {/* Headline + sub + CTA (HTML for better wrapping and responsiveness) */}
            <div
                id="services-graphic"
                className="fade-in"
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "0 8px",
                    display: "grid",
                    gap: 8,
                }}
            >
                <h2
                    style={{
                        margin: 0,
                        fontWeight: 800,
                        lineHeight: 1.05,
                        // scales between mobile and desktop
                        fontSize: "clamp(22px, 3.5vw, 36px)",
                    }}
                >
                    Start Investing with Confidence Today <br></br>
                    and Achieve Your Financial Goals
                </h2>
                <div style={{ marginTop: 8 }}>
                    <a
                        href="https://www.td.com/ca/en/investing/direct-investing?cm_sp=:GOOGLE:Direct+Investing+-+Targeted+-+English+(25_S_WL_WDI_AO_ACQ_EN_GEN):DIF:Brand+Keywords&gclsrc=aw.ds&gad_source=1&gad_campaignid=20455048001&gclid=CjwKCAjwx-zHBhBhEiwA7Kjq6-RdgJbUDWdONZgYHVvK2appj_7a7kBbKdc9Bpr6FRVarL_czaDnhxoCIB0QAvD_BwE" // change to a real route if you have one
                        className="btn-animation"
                        style={{
                            display: "inline-block",
                            backgroundColor: "#ffffff",
                            color: brand,
                            padding: "10px 16px",
                            borderRadius: 999,
                            fontWeight: 700,
                            textDecoration: "none",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                        }}
                        onMouseDown={(e) => e.currentTarget.style.transform = "translateY(1px)"}
                        onMouseUp={(e) => e.currentTarget.style.transform = ""}
                        onMouseLeave={(e) => e.currentTarget.style.transform = ""}
                    >
                        Explore Services
                    </a>
                </div>
            </div>

            {/* Images row (responsive) */}
            <div
                style={{
                    maxWidth: 1200,
                    margin: "20px auto 0",
                    padding: "0 8px",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: 20,
                    }}
                >
                    {/* On wider screens, go to two columns */}
                    <style>
                        {`
                            @media (min-width: 900px) {
                                .services-grid {
                                    grid-template-columns: 1fr 1fr;
                                }
                            }
                        `}
                    </style>

                    <div className="services-grid" style={{ display: "grid", gap: 20 }}>
                        <figure
                            className="fade-in"
                            style={{
                                margin: 0,
                                background: "rgba(255,255,255,0.06)",
                                borderRadius: 16,
                                overflow: "hidden",
                                padding: 0, // removed inner padding so image sits flush
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                minHeight: "260px",
                            }}
                        >
                            <img
                                src={servicesGraphicImg2}
                                width={500}
                                height={400}
                                loading="lazy"
                                decoding="async"
                                alt="Advisory and automation services visualization"
                                style={{
                                    display: "block",
                                    width: "100%", // fill the grid cell horizontally
                                    height: "100%", // fill the grid cell vertically
                                    maxHeight: 420,
                                    objectFit: "cover", // crop if necessary so the image edges sit flush
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
                                padding: 0, // removed inner padding so image sits flush
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                minHeight: "260px",
                            }}
                        >
                            <img
                                src={servicesGraphicImg}
                                width={500}
                                height={400}
                                loading="lazy"
                                decoding="async"
                                alt="Portfolio growth and insights visualization"
                                style={{
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    maxHeight: 420,
                                    objectFit: "cover",
                                }}
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

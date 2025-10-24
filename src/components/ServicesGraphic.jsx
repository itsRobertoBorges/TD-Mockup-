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
            {/* ...headline & CTA omitted for brevity... */}

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
                                padding: "12px 12px 0 12px", // remove bottom padding so image can sit flush
                                display: "flex",
                                alignItems: "flex-end", // align children to bottom
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
                                    maxWidth: "100%",
                                    height: "auto", // let maxHeight control height
                                    maxHeight: 420,
                                    objectFit: "contain",
                                    display: "block",
                                    alignSelf: "flex-end", // ensure image sits at bottom
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
                                padding: "12px 12px 0 12px", // remove bottom padding
                                display: "flex",
                                alignItems: "flex-end", // align children to bottom
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
                                    maxWidth: "100%",
                                    height: "auto", // removed 50vh so it can rest against bottom
                                    maxHeight: 420,
                                    objectFit: "contain",
                                    display: "block",
                                    alignSelf: "flex-end",
                                }}
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

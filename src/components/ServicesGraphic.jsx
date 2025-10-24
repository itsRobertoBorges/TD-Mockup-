import React from "react";
import servicesGraphicImg from "../assets/img/servicegraphic.png";
import servicesGraphicImg2 from "../assets/img/servicegraphic2.png";

export default function ServicesGraphic({ className = "", style = {} }) {
return (
    <div className={className} style={{ ...style, backgroundColor: "#007a3d" }}>
        <svg
            viewBox="0 -20 800 320"
            width="100%"
            height="300px"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Services graphic"
        >
            <title>Services graphic</title>

            <rect x="0" y="0" width="800" height="400" fill="#007a3d" />

                <img
                src={servicesGraphicImg2}
                style={{ maxWidth: "100%", height: "100%", display: "block" }}
                width={500}
                alt="Service graphic"
            />

            <g transform="translate(0, 20)">
                <g fill="#ffffff">
                    <circle cx="140" cy="200" r="40" />
                    <rect x="110" y="170" width="60" height="10" rx="10" />
                    <circle cx="400" cy="120" r="48" />
                    <rect x="370" y="90" width="60" height="12" rx="5" />
                    <circle cx="660" cy="240" r="40" />
                    <rect x="630" y="210" width="60" height="10" rx="10" />
                </g>

                <g stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" fill="none">
                    <path d="M180 200 C 260 200, 340 160, 360 140" />
                    <path d="M440 140 C 500 120, 600 200, 620 220" />
                </g>

                <g fill="#007a3d" fontWeight="700" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle">
                    <text x="140" y="200" fontSize="14" dominantBaseline="middle">Connect</text>
                    <text x="400" y="120" fontSize="16" dominantBaseline="middle">Build</text>
                    <text x="660" y="240" fontSize="14" dominantBaseline="middle">Grow</text>
                </g>
            </g>

            

            <text
                x="150" y="12"
                fill="#ffffff"
                fontWeight="700"
                fontSize="30"
                fontFamily="system-ui, Avenir, Helvetica, Arial, sans-serif"
                textAnchor="start"
                dominantBaseline="hanging"
            >
                Start Investing with Confidence today 
            </text>
            <text
                x="150" y="50"
                fill="#ffffff"
                fontWeight="700"
                fontSize="30"
                fontFamily="system-ui, Avenir, Helvetica, Arial, sans-serif"
                textAnchor="start"
                dominantBaseline="hanging"
            >
                and Achieve Your Financial Goals. 
            </text>

        </svg>

        {/* Hard-centering wrapper that neutralizes parent flex rules */}
        <div
            style={{
                width: "100%",
                display: "flex",            // lay out images in a row
                justifyContent: "center",   // center the row horizontally
                alignItems: "center",
                gap: 20,                    // space between images
                marginTop: 20
            }}
        >
            {/* servicesGraphicImg2 placed first so it appears to the left */}
            <img
                src={servicesGraphicImg2}
                style={{ maxWidth: "100%", height: "100%", display: "block" }}
                width={500}
                alt="Service graphic 2"
            />

            <img
                src={servicesGraphicImg}
                style={{ maxWidth: "100%", height: "100%", display: "block" }}
                width={500}
                alt="Service graphic"
            />
        </div>
    </div>
);
}

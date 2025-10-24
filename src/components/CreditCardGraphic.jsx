import React from "react";

const CreditCardGraphic = ({ style = {}, ...props }) => {
    return (
        <div
            style={{
                backgroundColor: "#ffffff",
                width: "100vw",
                height: "100vh",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",   // vertical centering
                alignItems: "flex-start",   // left align content
                paddingLeft: "20px",        // distance from left edge
                ...style,
            }}
            {...props}
        >
            <h1 style={{ margin: 0, fontSize: "1.2rem" }}></h1>
            <p
                className="fade-in"
                style={{
                    color: "green",
                    marginTop: "12px",
                    fontSize: "45px",
                    lineHeight: 0.9,
                }}
            >
                Go Further with a TD Credit Card <br></br> <br></br>Earn Rewards and Support Sustainability!
            </p>

          
        </div>
    );
};

export default CreditCardGraphic;
import React from "react";
import creditCardImg from "../assets/img/creditcardgraphic.png";
import "/src/index.css";

const CreditCardGraphic = ({ style = {}, ...props }) => {
    return (
        <div
            style={{
                backgroundColor: "#ffffff",
                width: "100vw",
                height: "100vh",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",         // side-by-side layout
                justifyContent: "space-between", // push text left and image right
                alignItems: "center",        // vertical center
                padding: "0 40px",           // left + right spacing
                ...style,
            }}
            {...props}
        >
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start", // keep text left-aligned
                    maxWidth: "40%", // give more space to the image
                }}
            >
                <p
                    className="fade-in"
                    style={{
                        color: "green",
                        margin: 0,
                        fontSize: "45px",
                        lineHeight: 0.9,
                    }}
                >
                    Go Further with a TD Debit Card
                    <br />
                    <br />
                    Earn Rewards and Support Sustainability!
                    <br />
                    <br />
                    <a 
                        href="https://tinyurl.com/2z8akfm7" 
                        className= "btn-animation"
                        style={{color: "green"}}>Apply Now and Enjoy Exclusive Benefits.
                    </a> 
                </p>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    width: "60%", // reserve larger right side for image
                    maxWidth: 900, // much bigger max width
                    flex: "0 0 auto",
                }}
            >
                <img
                    src={creditCardImg}
                    alt="Credit Card Graphic"
                    className="fade-in"
                    style={{
                        width: "100%",      // fill the right-side container
                        height: "auto",
                        maxHeight: "90vh",  // keep it within viewport height
                        objectFit: "contain",
                        display: "block",
                    }}
                />
            </div>
        </div>
    );
};

export default CreditCardGraphic;
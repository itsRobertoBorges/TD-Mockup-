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
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 40px",
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
                    alignItems: "flex-start",
                    maxWidth: "40%",
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
                        className="btn-animation"
                        style={{ color: "green" }}
                    >
                        Apply Now and Enjoy Exclusive Benefits.
                    </a>
                    <iframe
                        style={{ display: "block", marginTop: 20, width: 560, height: 315, border: 0 }}
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/yzWqIH9NBZE"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </p>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    width: "60%",
                    maxWidth: 900,
                    flex: "0 0 auto",
                }}
            >
                <img
                    src={creditCardImg}
                    alt="Credit Card Graphic"
                    className="fade-in"
                    style={{
                        width: "510%",
                        height: "auto",
                        maxHeight: "90vh",
                        objectFit: "contain",
                        display: "block",
                    }}
                />
            </div>
        </div>
    );
};

export default CreditCardGraphic;

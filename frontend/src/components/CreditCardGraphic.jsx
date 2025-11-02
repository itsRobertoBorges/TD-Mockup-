import React from "react";
import creditCardImg from "../assets/img/creditcardgraphic.png";
import "/src/index.css";

const CreditCardGraphic = ({ style = {}, ...props }) => {
  return (
    <div
      id="credit-card-graphic"
      style={{
        backgroundColor: "#ffffff",
        width: "100vw",
        minHeight: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        ...style,
      }}
      {...props}
    >
      {/* Text Section */}
      <div
        style={{
          flex: "1 1 400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          maxWidth: "500px",
          textAlign: "left",
          marginBottom: "40px",
        }}
      >
        <p
          className="fade-in"
          style={{
            color: "green",
            margin: 0,
            fontSize: "2rem",
            lineHeight: 1.2,
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
            style={{ color: "green", fontWeight: "bold" }}
          >
            Apply Now and Enjoy Exclusive Benefits.
          </a>
          <iframe
            style={{
              display: "block",
              marginTop: 20,
              width: "100%",
              maxWidth: "560px",
              height: "315px",
              border: 0,
            }}
            src="https://www.youtube.com/embed/yzWqIH9NBZE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </p>
      </div>

      {/* Image Section */}
      <div
        style={{
          flex: "1 1 400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "500px",
        }}
      >
        <img
          src={creditCardImg}
          alt="Credit Card Graphic"
          className="fade-in"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "400px",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default CreditCardGraphic;

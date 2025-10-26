import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import MainGraphic from "./components/MainGraphic.jsx";
import ServicesGraphic from "./components/ServicesGraphic.jsx";
import CreditCardGraphic from "./components/CreditCardGraphic.jsx";
import SupportGraphic from "./components/SupportGraphic.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <MainGraphic />
              <ServicesGraphic />
              <CreditCardGraphic />
              <SupportGraphic /> */}
            </>
          }
        />
        <Route path="/main-graphic" element={<MainGraphic />} />
        <Route path="/credit-card" element={<CreditCardGraphic />} />
        <Route path="/services-graphic" element={<ServicesGraphic />} />
        <Route path="/support-graphic" element={<SupportGraphic />} />
      </Routes>
    </>
  );
}

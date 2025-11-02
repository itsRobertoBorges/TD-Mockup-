import React, { useState, useCallback } from "react";
import Navbar from "./components/Navbar.jsx";
import MainGraphic from "./components/MainGraphic.jsx";
import ServicesGraphic from "./components/ServicesGraphic.jsx";
import CreditCardGraphic from "./components/CreditCardGraphic.jsx";
import SupportGraphic from "./components/SupportGraphic.jsx";
import OpenAccountModal from "./components/OpenAccountModal.jsx";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <Navbar onOpenAccount={openModal} />
      <MainGraphic />
      <ServicesGraphic />
      <CreditCardGraphic />
      <SupportGraphic />
      <OpenAccountModal open={isOpen} onClose={closeModal} />
    </>
  );
}

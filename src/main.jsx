import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import MainGraphic from './components/MainGraphic.jsx'
import ServicesGraphic from './components/ServicesGraphic.jsx'
import CreditCardGraphic from './components/CreditCardGraphic.jsx'
import SupportGraphic from './components/SupportGraphic.jsx'
import { BrowserRouter } from 'react-router-dom';
import OpenAccountModal from './components/OpenAccountModal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Navbar />
    <MainGraphic />
    <ServicesGraphic />
    <CreditCardGraphic />
    <SupportGraphic />
    </BrowserRouter >
  </StrictMode>
 
)

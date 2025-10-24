import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import MainGraphic from './components/MainGraphic.jsx'
import ServicesGraphic from './components/ServicesGraphic.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <MainGraphic />
    <ServicesGraphic />
  </StrictMode>,
)

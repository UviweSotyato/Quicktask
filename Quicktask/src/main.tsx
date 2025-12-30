import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import Home from './pages/Home.tsx'
import Hero from './pages/Hero.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Hero />
    <App />
  </StrictMode>,
)

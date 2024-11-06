import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'

// Ir a https://reactrouter.com/en/main/start/tutorial
// npm install react-router-dom
// BrowserRouter habilita el uso de rutas dentro de la App
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter >
)

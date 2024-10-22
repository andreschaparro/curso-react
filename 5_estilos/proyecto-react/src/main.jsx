import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// CSS para todo el proyecto de React
import './styles/style.css'

import { PrimerComponente } from './PrimerComponente'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente />
  </StrictMode>,
)

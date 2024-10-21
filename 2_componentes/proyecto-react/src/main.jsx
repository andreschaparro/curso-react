import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Un rafc se importa entre llaves, de la misma forma a como se hace una desestructuración de variables
import { PrimerComponente } from './PrimerComponente'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente />
  </StrictMode>,
)

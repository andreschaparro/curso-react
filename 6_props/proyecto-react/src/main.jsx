import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.css'

import { PrimerComponente } from './PrimerComponente'

// Las props permiten que un componente padre le pase información a un hijo
// Las mismas, son pares clave-valor de un objeto
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente titulo="Esta sección es de props" numero={4} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.css'

import { ListadoApp } from './ListadoApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListadoApp />
  </StrictMode>,
)
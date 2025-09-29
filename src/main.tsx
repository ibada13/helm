import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Constract from './Constract'
import { HashRouter } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>

    <Constract />
    </HashRouter>
  </StrictMode>,
)

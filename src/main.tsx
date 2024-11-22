import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router/router'
import './css/comm.css'

createRoot(document.body!).render(
    <StrictMode>
        <AppRouter />
    </StrictMode>,
)

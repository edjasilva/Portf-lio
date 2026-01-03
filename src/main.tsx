import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// GitHub Pages SPA fallback: if redirected from 404.html, restore the original path.
const params = new URLSearchParams(window.location.search)
const p = params.get('p')
if (p) {
  params.delete('p')
  const cleanQuery = params.toString()
  const newUrl = `${window.location.pathname.replace(/\/$/, '')}${decodeURIComponent(p)}${cleanQuery ? `?${cleanQuery}` : ''}`
  window.history.replaceState(null, '', newUrl)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

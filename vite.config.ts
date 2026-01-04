import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves sites under "/<repo>/". In CI we set BASE_PATH accordingly.
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
})

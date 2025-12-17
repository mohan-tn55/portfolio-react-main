import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/ // Corrected URL comment for Vite docs
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/portfolio-react-main" , // This is the crucial line for your deployment issue
})
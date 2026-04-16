import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/STEM-Learning-Platform',
  resolve: {
    dedupe: ['react', 'react-dom']
  }
})

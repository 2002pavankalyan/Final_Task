import { defineConfig } from 'vite'
<<<<<<< HEAD
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
=======
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
})
 
>>>>>>> 27e7a12e423066c30d308443decb6f27bf1a7b86

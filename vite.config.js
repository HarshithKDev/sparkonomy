import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// For more information on Vite configuration, visit https://vitejs.dev/config/
export default defineConfig({
  // Add Tailwind CSS and React plugins.
  plugins: [
    tailwindcss(),
    react()
  ],
  // Set the base path for the application.
  base: "/sparkonomy/"
});
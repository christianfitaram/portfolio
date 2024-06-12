import dotenv from 'dotenv';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// run package config
dotenv.config();
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  define: {
    'process.env': process.env
  }
})

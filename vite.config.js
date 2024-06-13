import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  // console.log( process.env);  Log loaded env variables
  return {
    plugins: [react()],
    base: '/portfolio',
    define: {
      'process.env':process.env
    }
  }
});


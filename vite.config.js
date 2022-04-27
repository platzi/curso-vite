import { defineConfig } from 'vite'

export default defineConfig(() => {
  const port = 3000

  return {
    server: {
      port
    }
  }
})

import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

export default defineConfig(({ command, mode }) => {
  const port = 3000

  console.log(command, mode)
  const env = loadEnv(mode, process.cwd())

  console.log(env.VITE_NAME)

  if (mode === "development") {
    console.log("modo desarrollo")
    return {
      server: {
        port
      }
    }
  } else {
    console.log("modo produccion")
    return {
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            help: resolve(__dirname, 'help', 'help.html')
          }
        }
      }
    }
  }
})

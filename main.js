import './style.css'
import buttonSyles from './button.module.css'
import imageStyles from './image.module.css'
import img from './vite-logo.png'
import { user } from './data.json'
import suma from './suma.ts'

console.log(`suma 2+3 = ${suma(2, 3)}`)

const modules = import.meta.glob('./modules/*.js')

console.log(modules)
for (const path in modules) {
  modules[path]().then((module) => {
    module.load()
  })
}

document.querySelector('#app').innerHTML = `
  <h1>Hello Platzi!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <button id="btn">Click!</button>
  <img id="img" />
  <pre>${JSON.stringify(user)}</pre>
`
document.getElementById('btn').className = buttonSyles.btn

const imagen = document.getElementById('img')
imagen.src = img
imagen.className = imageStyles.img


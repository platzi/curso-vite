import './style.css'
import buttonSyles from './button.module.css'
import imageStyles from './image.module.css'
import img from './vite-logo.png'

document.querySelector('#app').innerHTML = `
  <h1>Hello Platzi!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <button id="btn">Click!</button>
  <img id="img" />
`
document.getElementById('btn').className = buttonSyles.btn

const imagen = document.getElementById('img')
imagen.src = img
imagen.className = imageStyles.img


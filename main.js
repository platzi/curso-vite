import './style.css'
import buttonSyles from './button.module.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Platzi!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <button id="btn">Click!</button>
`
document.getElementById('btn').className = buttonSyles.btn


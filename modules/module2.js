const module = {
  name: "module 2"
}

export function load() {
  console.log(`${module.name} load!`)
}

export default module
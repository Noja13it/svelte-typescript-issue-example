import App from './App.svelte'
import { bar } from './foo'
let a: number = 0
console.log(a)
console.log(bar())

const app = new App({
  target: document.body,
  props: {},
})

export default app

import './style.css'
import { charmander } from './bases/06-decorators2.ts'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello, ${charmander.name} ${charmander.id}!!!</h1>
<a href="https://www.google.com">Documentación</a>
`
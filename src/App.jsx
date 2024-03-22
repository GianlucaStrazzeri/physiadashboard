import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="nav">
    <nav>Asistente virtual salud IA</nav>
    <nav>Fisioterapia</nav>
    <nav>Nutrición</nav>
    <nav>Psicologia</nav>
    <nav>Personal training</nav>
    <nav>Podologia</nav>
    </div>
    
      <h1>Physia</h1>

      <footer>
        <ul>
          <li>Condiciones generales </li>
          <li>Politica de privacidad</li>
          <li>Privacidad para email y privacidad </li>
          <li>Politica de rembolso</li>
          <li>Cookies</li>
        </ul>
      </footer>
    </>
  )
}

export default App

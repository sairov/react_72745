import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const titleStyles = {
    color: "Crimson",
    backgroundColor: "white",
    padding: 40,
    fontSize: 38
  }

  return (
    <>
      <h1 className='title' style={titleStyles}>Vite + React</h1>
      <header>
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default App

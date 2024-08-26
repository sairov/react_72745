import Title from './components/Title'
import './App.css'
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <Title action={() => alert('Hola pepe!!')} heading="h1" text="Hola mundo!"/>
      <Counter />
    </div>
  )
}

export default App

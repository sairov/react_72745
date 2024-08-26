// import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Counter from './containers/Counter';

function App() {
  // const elementRef = useRef(null);
  // let [elementState, setElementState] = useState('Este es el contenido inicial');

  // const handleClick = () => {
  //   // elementRef.current.innerHTML = 'Contenido actualizado';
  //   setElementState('Contenido actualizado');
  // }

  return (
    <>
      <Navbar />
      <main style={{padding: 60, margin: '0 auto'}}>
        {/* <h1>UseRef</h1>
        <div style={{margin: '24px 0'}}>
          <p style={{margin: '24px 0'}}>{elementState}</p>
          <button onClick={handleClick}>Cambiar contenido</button>
        </div> */}
        <Counter />
      </main>
    </>
  )
}

export default App;

// import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Counter from './containers/Counter';
import List from './components/List';
import Title from './components/Title';
import Card from './components/Card';

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
      <main className='main-content' style={{padding: 60, margin: '0 auto'}}>
        <Title className='main-content__title' heading='h3' text='Lenguajes de programación'/>
        <List className='main-content__list' bullet='square' items={['Javascript', 'C#', 'Java', 'Python', 'PHP', 'Elixir', 'Lisp', 'C++']}/>
        <Title className='main-content__title' heading='h2' text='Frameworks de Javascript'/>
        <List className='main-content__list' bullet='circle' items={['React', 'Angular', 'Vue', 'Svelte']}/>
        <Card type='primary' title='Esta es una tarjeta' description='El motivo de este componente es mostrar como es una tarjeta' link={{href: "https://coderhouse.com", text: "Ir a coder"}} />
        <Card type='secondary' title='Esta es una tarjeta' description='El motivo de este componente es mostrar como es una tarjeta' link={{href: "https://coderhouse.com", text: "Ir a coder"}} />


        {/* <h1>UseRef</h1>
        <div style={{margin: '24px 0'}}>
          <p style={{margin: '24px 0'}}>{elementState}</p>
          <button onClick={handleClick}>Cambiar contenido</button>
        </div> */}
        {/* <Counter /> */}
      </main>
    </>
  )
}

export default App;

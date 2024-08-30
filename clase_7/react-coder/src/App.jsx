import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Counter from './containers/Counter';
import List from './components/List';
import Title from './components/Title';
import Filter from './components/Filter';
import Accordion from './components/Accordion';

function App() {
  // const elementRef = useRef(null);
  // let [elementState, setElementState] = useState('Este es el contenido inicial');

  // const handleClick = () => {
  //   // elementRef.current.innerHTML = 'Contenido actualizado';
  //   setElementState('Contenido actualizado');
  // }

    // const [ items, setItems ] = useState([]);
    // const [ searchParam, setSearchParam ] = useState([]);

    // useEffect(() => {
    //   fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchParam}`)
    //   .then(res => res.json())
    //   .then(data => setItems(data.results.slice(0, 4)));
    // }, [searchParam])


      const items = [
        {
          id: 1,
          title: 'Arroz',
          price: 1000
        },
        {
          id: 2,
          title: 'Leche',
          price: 1500
        },
        {
          id: 3,
          title: 'Azucar',
          price: 2000
        },
      ]

  return (
    <>
      <Navbar />
      <input type="text" onChange={(e) => setSearchParam(e.target.value)}/>
      <main className='main-content' style={{padding: 60, margin: '0 auto'}}>
      <Title className='main-content__title' heading='h1' text='Resultado de la búsqueda'/>
      <hr />
      {/* {items.map(item => <Card title={item.title} price={item.price} img={item.thumbnail} link={item.permalink} type="primary" />)} */}

      {/* <Accordion title="Fútbol" >
       <p>El futbol es un deporte muy jugado en el mundo</p>
       <button>Holaaa</button>
      </Accordion> */}
      {/* <Counter /> */}

      <Filter>
        {(selectedValue, handleSelectedValue) => (
            <div>
              <label htmlFor="select">Filtrar por precio</label>
              <input type="number" onChange={handleSelectedValue}/>
              <List items={items.filter(item => item.price > selectedValue)} />
            </div>
          )
        }
      </Filter>

      </main>
    </>
  )
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BaseLayout from "./layout/BaseLayout"
import Home from './pages/Home';
import Store from './pages/Store';
import Detail from './pages/Detail';
import { CartContextProvider } from './context/cartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route exact path='/' element={<Home condition={false}/>}/>
            <Route exact path='/tienda' element={<Store />}/>
            <Route exact path='/tienda/categoria/:id' element={<Store />}/>
            <Route exact path='/detalle/:id' element={<Detail />}/>
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../../components/ItemList";
import Spinner from "../../components/Spinner";

const Store = () => {
 const { category } = useParams();

 let [ items, setItems ] = useState([]);
 let [ loading, setLoading ] = useState(false);
 let [ fallback, setFallback ] = useState(false);

 useEffect(() => {
     setLoading(true);
     fetch('/src/data/items.json')
     .then(res => res.json())
     .then(data => {
       if (category) {
         setItems(data.filter(item => item.category === category))
       } else {
         setItems(data);
       }
     })
     .catch(e => {
       setFallback(true);
     })
     .finally(() => setLoading(false));
 }, []);


  return (
    <main className="store">
     { loading
      ? <Spinner />
      : fallback
        ? (
            <p>No pudimos cargar los datos</p>
          )
        : (
          <>
            <aside className="store__aside">
              <p>filtros</p>
            </aside>
            <ItemList className="store__items" items={items}/>
          </>
        )
    }
    </main>
  );
}

export default Store;
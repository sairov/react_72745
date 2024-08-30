import { useState, useEffect } from "react";

import Item from "../Item";

const ItemList = () => {
  let [ items, setItems ] = useState([]);

  useEffect(() => {
      fetch('/src/data/items.json')
      .then(res => res.json())
      .then(data => setItems(data))
  }, []);

  return(
    <section className="items__container container">
      {items.map(item => <Item {...item} tag="NUEVO"/>)}
    </section>
  );

}

export default ItemList;
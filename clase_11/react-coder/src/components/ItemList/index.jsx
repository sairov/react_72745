import { useState, useEffect } from "react";

import Item from "../Item";

const ItemList = ({category}) => {
  let [ items, setItems ] = useState([]);
  console.log(category);

  useEffect(() => {
      fetch('/src/data/items.json')
      .then(res => res.json())
      .then(data => {
        if (category) {
          setItems(data.filter(item => item.category ===category))
        } else {
          setItems(data);
        }
      })
  }, []);


  return(
    <section className="items__container container">
      {items.map((item, i) => <Item key={`item-${i}`} {...item} tag="NUEVO"/>)}
    </section>
  );

}

export default ItemList;
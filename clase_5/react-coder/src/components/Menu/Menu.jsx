import ItemList from "../ItemList";

const Menu = ({ items, children }) => {
  // console.log(items);

  return(
    <menu className="navbar__menu">
      { items.map(item => <ItemList label={item} />) }
      {children}
    </menu>
  );
};

export default Menu;
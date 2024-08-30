import ItemList from "../ItemList";

const Menu = ({ links, children }) => {
  // console.log(items);

  return(
    <menu className="navbar__menu">
      { links.map(item => <ItemList label={item} />) }
      {children}
    </menu>
  );
};

export default Menu;
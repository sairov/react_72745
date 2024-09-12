const Menu = ({links, className, children}) => {

  return (
    <menu className={`menu ${className}__menu`}>
      { links.map((link, i) => {
        return (
          <li key={`navlink-${i}`} className={`menu__item ${className}__item`}>
            <li to={link.href}>{link.label}</li>
          </li>
        )
      }) }
      { children }
    </menu>
  );
};

export default Menu;
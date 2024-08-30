
const List = ({ items, ...props }) => {

  console.log("Hola desde list");

  return (
    <ul className={props.className} style={{listStyleType: props.bullet}}>
      {
        items?.map(item => <li>
          <h3>{item.id} {item.title}</h3>
          <p>$ {item.price}</p>
        </li>)
      }
    </ul>
  )
};

export default List;

const List = ({ items, ...props }) => {
  console.log(props);

  return (
    <ul className={props.className} style={{listStyleType: props.bullet}}>
      {
        items?.map(item => <li>{item}</li>)
      }
    </ul>
  )
};

export default List;
import { useState } from "react";

const Home = ({condition}) => {

  const [innerCondition, setInnerCondition] = useState(condition);

  const changeCondition = () => {
    setInnerCondition(!innerCondition);
  }

  return (
    <main style={{display: 'grid', placeItems: 'center'}}>
       {innerCondition ? <h2>Condición verdadera</h2> : <h2>condición False</h2>}
       <button onClick={changeCondition}>Cambiar condición</button>
     </main>
  );
};

export default Home;
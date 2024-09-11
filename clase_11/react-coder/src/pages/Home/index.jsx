import { useContext } from "react";

const Home = () => {
  return (
    <main style={{display: 'grid', placeItems: 'center'}}>
       <h2>Home Page 2</h2>
       <input type="text" onChange={sendData}/>
    </main>
  );
};

export default Home;
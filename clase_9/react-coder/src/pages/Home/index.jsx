// import { useState } from "react";
// import Button from "../../components/Button";
// import CartWidget from "../../components/CartWidget";

// import ResizeObserverComponent from "../../components/Resizable";
import WheelEventComponent from "../../components/WheelChanger";

const Home = () => {

  // const handler = () => {
  //   setCount(count++);
  // }

  return (
    <main style={{display: 'grid', placeItems: 'center'}}>
       <h2>Home Page</h2>
       {/* <ResizeObserverComponent /> */}
       {/* <WheelEventComponent /> */}
       {/* <input type="text" onKeyDown={inputHandler} /> */}
       {/* <CartWidget quantity={count}/>
       <Button eventHandler={handler}/> */}
       {/* <Button eventHandler={() => {console.log('Desde otro boton')}}/> */}
    </main>
  );
};

export default Home;
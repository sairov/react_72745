import { useState, useRef } from "react";
import Title from "../Title";
import Button from "../Button";

const Counter = () => {
  let renderCount = useRef(0);
  let [ count, setCount ] = useState(0);

  renderCount.current++;
  const handleIncrease = () => setCount(count++);
  const handleDecrease = () => count < 0 ? 0 : setCount(count--);

  return (
    <div>
        <Title heading="h4" text="Contador de cantidades"/>
        <span>Renders: {renderCount.current}</span>
        <p>
          Cantidad: <span>{ count }</span>
        </p>
        {/* <button onClick={() => {
          let current =  document.getElementById('cantidad').innerText;
          console.log(current++);

          document.getElementById('cantidad').innerHTML = ++current;
        }}>+</button> */}
        <Button action={handleIncrease} text="+" />
        <Button action={handleDecrease} text="-" />
    </div>
  );
}

export default Counter;
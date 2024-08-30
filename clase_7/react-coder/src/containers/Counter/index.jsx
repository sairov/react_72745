// import { useState, useEffect } from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { useCount } from "../../hooks/useCount";

const Counter = () => {
  const { count, handleIncrease, handleDecrease, reset } = useCount(0);
  // let [ count, setCount ] = useState(0);

  // const handleIncrease = () => setCount(count++);
  // const handleDecrease = () => count < 0 ? 0 : setCount(count--);
  // const reset = () => setCount(0);

  // useEffect(() => {
  //   console.log('El componente ha sido renderizado');

  // }, [count]);

  return (
    <div>
        <Title heading="h4" text="Contador de cantidades"/>
        <p>
          Cantidad: <span>{ count || 0}</span>
        </p>
        <Button action={handleIncrease} text="+" />
        <Button action={handleDecrease} text="-" />
        <Button action={reset} text="Reset" />
    </div>
  );
}

export default Counter;
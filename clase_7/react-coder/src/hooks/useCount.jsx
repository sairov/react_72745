import { useState } from "react";

export const useCount = () => {
  let [ count, setCount ] = useState(0);

  const handleIncrease = () => setCount(count++);
  const handleDecrease = () => count < 0 ? 0 : setCount(count--);
  const reset = () => setCount(0);

  return { count, handleIncrease, handleDecrease, reset}
}

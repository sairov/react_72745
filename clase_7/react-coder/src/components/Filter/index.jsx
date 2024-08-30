import { useState } from "react";

const Filter = ({ children }) => {
  let [ selectedValue, setSelectedValue ] = useState(0);

  const handleSelectedValue = (event) => {
    setSelectedValue(event.target.value);
  }

  return children(selectedValue, handleSelectedValue);
};

export default Filter;
import React, { createContext, useContext, useState} from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) =>  {
  const [ data, setData ] = useState();

  const addData = (newData) => {
    setData({
      ...data,
      ...newData
    })
  }

  return <GlobalContext.Provider
    value={{data, addData}}
  >
    { children }
  </GlobalContext.Provider>
}
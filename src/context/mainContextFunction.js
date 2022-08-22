import React, { Component, createContext, useState } from "react";

export const mainContextFunction = createContext();

const MainContextFunctionProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "Rey",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  });
  return (
    <mainContextFunction.Provider value={{ data }}>
      {children}
    </mainContextFunction.Provider>
  );
};

export default MainContextFunctionProvider;

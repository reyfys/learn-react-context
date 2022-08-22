import React, { Component, createContext, useState } from "react";

export const LayoutContextNew = createContext();

const LayoutContextNewProvider = ({ children }) => {
  const [state, setState] = useState({
    nightmode: true,
    day: {
      color: "#000",
      background: "red",
    },
    night: {
      color: "#ffff",
      background: "#000",
    },
  });

  const handleToggle = () => {
    setState((prevState) => ({
      ...prevState,
      nightmode: !state.nightmode,
    }));
  };

  return (
    <div>
      <LayoutContextNew.Provider
        value={{ ...state, handleToggle }} //ini ada value disini karena datanya ada di dalam context
      >
        {children}
      </LayoutContextNew.Provider>
    </div>
  );
};

export default LayoutContextNewProvider;

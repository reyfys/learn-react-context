import React, { useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";
import { LayoutContextNew } from "../context/LayoutContextNew";

const Toggle = () => {
  const { nightmode, handleToggle } = useContext(LayoutContextNew);

  return (
    <div>
      <button onClick={handleToggle}>
        Change to {nightmode ? "day" : "night"} Mode
      </button>
    </div>
  );
};

export default Toggle;

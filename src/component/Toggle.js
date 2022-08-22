import React, { useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";

const Toggle = () => {
  const { nightmode, handleToggle } = useContext(LayoutContext);

  return (
    <div>
      <button onClick={handleToggle}>
        Change to {nightmode ? "day" : "night"} Mode
      </button>
    </div>
  );
};

export default Toggle;

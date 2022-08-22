import React, { useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";
import { mainContext } from "../context/mainContext";

const CardName = () => {
  const context = useContext(mainContext);
  const { nightmode, day, night } = useContext(LayoutContext);

  const mood = nightmode ? night : day; //guna nya untuk ngecek kondisi nightmode

  return (
    <div>
      <h1 style={{ color: mood.color }}>{context.data.name}</h1>
    </div>
  );
};

export default CardName;

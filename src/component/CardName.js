import React, { useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";
import { LayoutContextNew } from "../context/LayoutContextNew";
import { mainContext } from "../context/mainContext";
import MainContextProviderClass from "../context/mainContext";
import { mainContextClass } from "../context/mainContext";

const CardName = () => {
  const { name } = useContext(mainContextClass);
  const { nightmode, day, night } = useContext(LayoutContextNew);

  const mood = nightmode ? night : day; //guna nya untuk ngecek kondisi nightmode

  return (
    <div>
      <h1 style={{ color: mood.color }}>{name}</h1>
    </div>
  );
};

export default CardName;

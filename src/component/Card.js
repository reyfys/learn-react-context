import React from "react";
import { LayoutContext } from "../context/LayoutContext";
import CardImage from "./CardImage";
import CardName from "./CardName";
import Toggle from "./Toggle";
import { useContext } from "react";

const Card = () => {
  const { nightmode, day, night } = useContext(LayoutContext);

  const mood = nightmode ? night : day;

  return (
    <div style={{ backgroundColor: mood.background }}>
      <CardName />
      <CardImage />
      <Toggle />
    </div>
  );
};

export default Card;

import React, { useContext } from "react";
import { mainContext } from "../context/mainContext";
import { mainContextClass } from "../context/mainContext";

const CardImage = () => {
  const { avatar } = useContext(mainContextClass);

  return (
    <div>
      <img src={avatar} />
    </div>
  );
};

export default CardImage;

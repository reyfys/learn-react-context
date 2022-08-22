import React, { useContext } from "react";
import { mainContext } from "../context/mainContext";

const CardImage = () => {
  const context = useContext(mainContext);

  return (
    <div>
      <img src={context.data.avatar} />
    </div>
  );
};

export default CardImage;

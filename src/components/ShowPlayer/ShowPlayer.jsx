import React from "react";
import "./ShowPlayer.css";

const ShowPlayer = ({ pl }) => {
  console.log(pl);
  if (pl === undefined) {
    return;
  }
  const { name, picture, price } = pl;
  return (
    <div className="player-div-selected">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
    </div>
  );
};

export default ShowPlayer;

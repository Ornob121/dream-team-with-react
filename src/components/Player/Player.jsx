import React from "react";
import "./Player.css";

const Player = (props) => {
  const { name, price, job, about, picture, age } = props.player;
  const selectPlayer = props.selectPlayer;
  return (
    <div className="player-container">
      <img src={picture} alt="" />
      <h2>{name}</h2>
      <p>Age:{age}</p>
      <p>{about}</p>
      <div className="role-price">
        <p>Role:{job}</p>
        <p>Price: ${price}</p>
      </div>
      <button onClick={() => selectPlayer(props.player)}>Add</button>
    </div>
  );
};

export default Player;

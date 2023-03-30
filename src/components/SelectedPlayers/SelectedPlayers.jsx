import React from "react";
import ShowPlayer from "../ShowPlayer/ShowPlayer";

const SelectedPlayers = ({ selectedPlayers }) => {
  return (
    <div>
      {selectedPlayers.map((pl) => (
        <ShowPlayer pl={pl}></ShowPlayer>
      ))}
    </div>
  );
};

export default SelectedPlayers;

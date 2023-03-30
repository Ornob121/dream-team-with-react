import React, { useEffect, useState } from "react";
import { addToDb, getFromDb } from "../../utilities/fakeDb";
import Player from "../Player/Player";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import "./Players.css";

const Players = () => {
  const [players, setPlayers] = useState([]);

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/hnmahamud/players_api/main/players.json?fbclid=IwAR32WO4481p6XP_tM2e4ulgFbgMC0-IOW6U6b9BAXf35MrjsvCo_96DEXjI"
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  useEffect(() => {
    const playerCart = getFromDb();
    const savedPlayer = [];
    for (const id in playerCart) {
      const addedPlayer = players.find((player) => player.id === id);
      savedPlayer.push(addedPlayer);
    }
    setSelectedPlayers(savedPlayer);
  }, [players]);

  const selectPlayer = (player) => {
    const newPlayers = [...selectedPlayers, player];
    setSelectedPlayers(newPlayers);
    addToDb(player.id);
  };

  return (
    <div className="full-container">
      <div className="player-div">
        {players.map((player) => (
          <Player
            player={player}
            key={player.id}
            selectPlayer={selectPlayer}
          ></Player>
        ))}
      </div>
      <div className="selected-players">
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          key={selectedPlayers.id}
        ></SelectedPlayers>
      </div>
    </div>
  );
};

export default Players;

const addToDb = (id) => {
  let playerCart = getFromDb();

  playerCart[id] = 1;

  localStorage.setItem("selected-player", JSON.stringify(playerCart));
};

const getFromDb = () => {
  let playerCart = {};

  const storedPlayer = JSON.parse(localStorage.getItem("selected-player"));
  if (storedPlayer) {
    playerCart = storedPlayer;
  }
  return playerCart;
};

export { addToDb, getFromDb };

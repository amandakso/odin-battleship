const shipFactory = require('./ship');

const gameboardFactory = () => {
  const player1Ships = [];
  const player2Ships = [];
  const getPlayer1Ships = () => player1Ships;
  const getPlayer2Ships = () => player2Ships;
  const placeShip = (xCoord, yCoord, length, orientation, player) => {
    if (player === 1) {
      let id = player1Ships.length;
      let battleship = shipFactory(length, id);
      battleship.changeCoordinates(xCoord, yCoord);
      battleship.changeOrientation(orientation);
      player1Ships.push(battleship);
    } else if (player === 2) {
      let id = player2Ships.length;
      let battleship = shipFactory(length, id);
      battleship.changeCoordinates(xCoord, yCoord);
      battleship.changeOrientation(orientation);
      player2Ships.push(battleship);
    }
  };
  return {
    getPlayer1Ships,
    getPlayer2Ships,
    placeShip,
  };
};

module.exports = gameboardFactory;
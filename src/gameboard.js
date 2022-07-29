const shipFactory = require('./ship');

const gameboardFactory = () => {
  const board = new Array(10).fill(null).map(() => new Array(10).fill(null));
  const getBoard = () => board;
  const ships = [];
  const getShips = () => ships;
  const placeShip = (xCoord, yCoord, length, orientation) => {
    const markBoard = (ship) => {
      const x = ship.getXCoord();
      const y = ship.getYCoord();
      const id = ship.getId();
      const shipLength = ship.getLength();
      const direction = ship.getOrientation();
      if (direction === 'vertical') {
        for (let i = 0; i < shipLength; i++) {
          board[x][y + i] = id;
        }
      } else {
        for (let i = 0; i < shipLength; i++) {
          board[x + i][y] = id;
        }
      }
    };
    const id = ships.length;
    const battleship = shipFactory(length, id);
    battleship.changeCoordinates(xCoord, yCoord);
    battleship.changeOrientation(orientation);
    markBoard(battleship);
    ships.push(battleship);
  };
  const receiveAttack = (xCoord, yCoord) => {
    const location = board[xCoord][yCoord];
    if (location === null) {
      board[xCoord][yCoord] = 'miss';
    } else {
      const direction = ships[location].getOrientation();
      if (direction === 'vertical') {
        const x = ships[location].getXCoord();
        const index = xCoord - x;
        ships[location].hit(index);
      } else {
        const y = ships[location].getYCoord();
        const index = yCoord - y;
        ships[location].hit(index);
      }
    }
  };
  const allSunk = () => {
    for (let i = 0; i < ships.length; i++) {
      const answer = ships[i].isSunk();
      if (answer === false) {
        return false;
      }
    }
    return true;
  };
  return {
    getBoard,
    getShips,
    placeShip,
    receiveAttack,
    allSunk,
  };
};

module.exports = gameboardFactory;
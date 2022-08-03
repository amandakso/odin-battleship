const shipFactory = require('./ship');

const gameboardFactory = () => {
  const board = new Array(10).fill('none').map(() => new Array(10).fill('none'));
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
          board[x + i][y] = id;
        }
      } else {
        for (let i = 0; i < shipLength; i++) {
          board[x][y + i] = id;
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
    if (location === 'miss' || location === 'hit') {
      return ('invalid');
    }
    if (location === 'none') {
      board[xCoord][yCoord] = 'miss';
      return ('valid');
    }
    const direction = ships[location].getOrientation();
    if (direction === 'vertical') {
      board[xCoord][yCoord] = 'hit';
      const x = ships[location].getXCoord();
      const index = xCoord - x;
      ships[location].hit(index);
      return ('valid');
    }
    if (direction === 'horizontal') {
      board[xCoord][yCoord] = 'hit';
      const y = ships[location].getYCoord();
      const index = yCoord - y;
      ships[location].hit(index);
      return ('valid');
    }
    return ('invalid');
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
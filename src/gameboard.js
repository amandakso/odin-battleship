const shipFactory = require('./ship');

const gameboardFactory = () => {
  const player1Board = new Array(10).fill(null).map(() => new Array(10).fill(null));
  const getPlayer1Board = () => player1Board;
  const player2Board = new Array(10).fill(null).map(() => new Array(10).fill(null));
  const getPlayer2Board = () => player2Board;
  const player1Ships = [];
  const player2Ships = [];
  const getPlayer1Ships = () => player1Ships;
  const getPlayer2Ships = () => player2Ships;
  const placeShip = (xCoord, yCoord, length, orientation, player) => {
    const markBoard = (ship, board) => {
      let x = ship.getXCoord();
      let y = ship.getYCoord();
      let id = ship.getId();
      let shipLength = ship.getLength();
      let orientation = ship.getOrientation();
      if (orientation === 'vertical') {
        for (let i = 0; i < shipLength; i++) {
          board[x][y + i] = id;
        }
      } else {
        for (let i = 0; i < shipLength; i++) {
          board[x + i][y] = id;
        }
      }
    };
    if (player === 1) {
      let id = player1Ships.length;
      let battleship = shipFactory(length, id);
      battleship.changeCoordinates(xCoord, yCoord);
      battleship.changeOrientation(orientation);
      markBoard(battleship, player1Board);
      player1Ships.push(battleship);
    } else if (player === 2) {
      let id = player2Ships.length;
      let battleship = shipFactory(length, id);
      battleship.changeCoordinates(xCoord, yCoord);
      battleship.changeOrientation(orientation);
      markBoard(battleship, player2Board);
      player2Ships.push(battleship);
    }
  };
  const receiveAttack = (xCoord, yCoord, playerTurn) => {
    // 
  }
  return {
    getPlayer1Board,
    getPlayer2Board,
    getPlayer1Ships,
    getPlayer2Ships,
    placeShip,
    receiveAttack,
  };
};

module.exports = gameboardFactory;
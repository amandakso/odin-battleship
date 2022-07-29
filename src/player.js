const gameboardFactory = require('./gameboard');

const playerFactory = () => {
  const playerGameboard = gameboardFactory();
  let turn = true;
  const isTurn = () => turn;
  const changeTurn = () => {
    turn ? false: true;
  };
  return {
    isTurn,
    changeTurn,
  }
};

module.exports = playerFactory;

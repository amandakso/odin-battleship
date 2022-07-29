const gameboardFactory = require('./gameboard');

const playerFactory = () => {
  const playerGameboard = gameboardFactory();
  let turn = true;
  const isTurn = () => turn;
  const changeTurn = () => {
    turn ? false: true;
  };
  const launchAttack = (enemy, xCoord, yCoord) => {
    enemy.playerGameboard.receiveAttack(xCoord, yCoord);
  };
  // for computer attacks
  const getRandomCoord = () => {
    Math.floor(Math.random() * 10);
  };
  return {
    isTurn,
    changeTurn,
    launchAttack,
  };
};

module.exports = playerFactory;

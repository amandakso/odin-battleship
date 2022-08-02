import { renderBoards, renderButtons } from './dom';

const playerFactory = require('./player');

const setUpGame = () => {
  const player1 = playerFactory();
  const player2 = playerFactory(); // cpu
  player2.changeTurn();
  const getPlayer1 = () => player1;
  const getPlayer2 = () => player2;
  renderBoards();
  renderButtons(player1, player2);
  return {
    getPlayer1,
    getPlayer2,
  };
};

const startGame = (player1, player2) => {
  // while there is no loser...
  // switch turns
  // while player1 turn is true
  //click button
  // receive attack
  //switch turns
  // while its player2 turn
  // generate random attack
  // receive attack
  // change turns
  //announce winner
}

export { setUpGame, startGame };

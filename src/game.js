import { renderBoards, renderButtons } from './dom';

const playerFactory = require('./player');

const setUpGame = () => {
  const player1 = playerFactory();
  const player2 = playerFactory(); // cpu
  renderBoards();
  renderButtons(player1, player2);
};

export { setUpGame };

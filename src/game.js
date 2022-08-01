const playerFactory = require('./player');
import { renderBoards, renderButtons } from './dom';

const startGame = () => {
  const player1 = playerFactory();
  const player2 = playerFactory(); // cpu
  renderBoards();
  renderButtons(player1, player2);
};

export { startGame };

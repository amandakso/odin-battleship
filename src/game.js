import { setUpBoard, renderBoards, deleteBoards, renderButtons } from './dom';

const playerFactory = require('./player');

const setUpGame = () => {
  const player1 = playerFactory('Player 1');
  const player2 = playerFactory('Computer'); // cpu
  player2.changeTurn();
  const getPlayer1 = () => player1;
  const getPlayer2 = () => player2;
  const name = document.getElementById('name');
  name.addEventListener('click', () => {
    const info = document.querySelector('.player1Info');
    info.style.display = 'none';
    player1.changeName(document.getElementById('player1').value);
    document.getElementById('player1').value = '';
    setUpBoard();
  });
  return {
    getPlayer1,
    getPlayer2,
  };
};


const startGame = (player1, player2) => {
  renderBoards(player1.getGameboard().getBoard(), player2.getGameboard().getBoard());
  renderButtons(player1, player2);
};

export { setUpGame, startGame };

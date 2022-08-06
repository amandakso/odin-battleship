import { setUpBoard, renderBoards, deleteBoards, renderButtons } from './dom';

const playerFactory = require('./player');

const startGame = (player1, player2) => {
  renderBoards(player1.getGameboard().getBoard(), player2.getGameboard().getBoard());
  renderButtons(player1, player2);
};

const setUpGame = () => {
  const player1 = playerFactory('Player 1');
  const player2 = playerFactory('Computer'); // cpu
  player2.changeTurn();
  const getPlayer1 = () => player1;
  const getPlayer2 = () => player2;
  // name event listener doesn't reset with reset button
  const info = document.querySelector('.player1Info');
  const para = document.createElement('p');
  para.innerText = "Player Name: ";
  info.appendChild(para);
  const name = document.createElement('input');
  name.type = 'text';
  name.classList.add('name');
  info.appendChild(name);
  const nameBtn = document.createElement('button');
  nameBtn.innerText = 'Submit';
  info.appendChild(nameBtn);

  nameBtn.addEventListener('click', () => {
    info.style.display = 'none';
    player1.changeName(document.querySelector('.name').value);
    while (info.firstChild) {
      info.removeChild(info.firstChild);
    }
    setUpBoard(player1);
  });
  const startBtn = document.querySelector('.startBtn');
  const start = document.createElement('button');
  start.innerText = 'Start Game';
  startBtn.appendChild(start);
  start.addEventListener('click', () => {
    startGame(player1, player2);
  });
  const resetBtn = document.querySelector('.resetBtn');
  const reset = document.createElement('button');
  reset.innerText = 'Reset Game';
  resetBtn.appendChild(reset);
  reset.addEventListener('click', () => {
    const resetGame = () => {
      while (startBtn.firstChild) {
        startBtn.removeChild(startBtn.firstChild);
      }
      while (resetBtn.firstChild) {
        resetBtn.removeChild(resetBtn.firstChild);
      }
      deleteBoards();
      const setup = setUpGame();
      const p1 = setup.getPlayer1();
      const p2 = setup.getPlayer2();
      const p1Gameboard = p1.getGameboard();
      const p2Gameboard = p2.getGameboard();
      p2Gameboard.generateRandomFleet();
    };
    resetGame();
  });
  return {
    getPlayer1,
    getPlayer2,
  };
};

export { setUpGame, startGame };

const playerFactory = require('./player');

const player1 = playerFactory();
const player2 = playerFactory(); // cpu

const displayGameboards = () => {
  const boards = document.querySelector('.boards');
  let div1 = document.createElement('div');
  div1.classList.add('board');
  let div2 = document.createElement('div');
  div2.classList.add('board');
  const numberOfSquares = 100;
  for (let i = 0; i < numberOfSquares; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.classList.add('one');
    div1.appendChild(square);
  }
  for (let i = 0; i < numberOfSquares; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.classList.add('two');
    div2.appendChild(square);
  }
  boards.appendChild(div1);
  boards.appendChild(div2);
};

export { displayGameboards };

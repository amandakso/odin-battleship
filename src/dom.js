const playerFactory = require('./player');

const numberOfSquares = 10; // number of squares in one row

const setUpBoard = (player) => {
  const setup = document.querySelector('.setup');
  const btn = document.createElement('button');
  btn.classList.add('axis');
  btn.innerText = 'X-AXIS';
  btn.value = 'x';
  btn.addEventListener('click', () => {
    const axis = btn.value === 'x' ? 'y' : 'x';
    if (axis === 'x') {
      btn.innerText = 'X-AXIS';
      btn.value = axis;
    } else {
      btn.innerText = 'Y-AXIS';
      btn.value = axis;
    }
  });
  setup.appendChild(btn);
  const board = document.createElement('div');
  board.classList.add('board');
  let counter = 0;
  for (let i = 0; i < numberOfSquares; i++) {
    for (let j = 0; j < numberOfSquares; j++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.dataset.x = i;
      square.dataset.y = j;
      square.classList.add(`s${i}${j}`);
      square.addEventListener('mouseover', () => {
        let x = (square.dataset.x);
        let y = (square.dataset.y);
        let length;
        switch (counter) {
          case 0:
            length = 5;
            break;
          case 1:
            length = 4;
            break;
          case 2:
            length = 3;
            break;
          case 3:
            length = 3;
            break;
          case 4:
            length = 2;
            break;
          default:
            length = 5;
            return;
        };
        if (btn.value === 'x') { // horizontal
          for (let i = 0; i < length; i++) {
            let coordinates = document.querySelector(`.s${x}${parseInt(y) + i}`);
            if ((parseInt(y) + i) >= 0 && parseInt(y) + i <= 9) {
              coordinates.classList.add('shade');
            }
          }
        } else {
          for (let i = 0; i < length; i++) {
            let coordinates = document.querySelector(`.s${parseInt(x)+ i}${y}`);
            if ((parseInt(x) + i) >= 0 && parseInt(x) + i <= 9) {
              coordinates.classList.add('shade');
            }
          }
        }
      });
      square.addEventListener('mouseleave', () => {
        let x = (square.dataset.x);
        let y = (square.dataset.y);
        let length;
        switch (counter) {
          case 0:
            length = 5;
            break;
          case 1:
            length = 4;
            break;
          case 2:
            length = 3;
            break;
          case 3:
            length = 3;
            break;
          case 4:
            length = 2;
            break;
          default:
            length = 0;
            return;
        };
        if (btn.value === 'x') { // horizontal
          for (let i = 0; i < length; i++) {
            let coordinates = document.querySelector(`.s${x}${parseInt(y) + i}`);
            if ((parseInt(y) + i) >= 0 && parseInt(y) + i <= 9) {
              coordinates.classList.remove('shade');
            }
          }
        } else {
          for (let i = 0; i < length; i++) {
            let coordinates = document.querySelector(`.s${parseInt(x)+ i}${y}`);
            if ((parseInt(x) + i) >= 0 && parseInt(x) + i <= 9) {
              coordinates.classList.remove('shade');
            }
          }
        }
      });
      square.addEventListener('click', () => {
        let x = (square.dataset.x);
        let y = (square.dataset.y);
        let length;
        switch (counter) {
          case 0:
            length = 5;
            break;
          case 1:
            length = 4;
            break;
          case 2:
            length = 3;
            break;
          case 3:
            length = 3;
            break;
          case 4:
            length = 2;
            break;
          default:
            length = 0;
            return;
        }
        let gameboard = player.getGameboard();
        let orientation;
        if (btn.value === 'x') {
          orientation = 'horizontal';
        } else {
          orientation = 'vertical';
        }
        let check = gameboard.placeShip(parseInt(x), parseInt(y), length, orientation);
        if (check === false) {
          return;
        }
        if (btn.value === 'x') { // horizontal
          for (let k = 0; k < length; k++) {
            let coordinates = document.querySelector(`.s${x}${parseInt(y) + k}`);
            if ((parseInt(y) + k) >= 0 && parseInt(y) + k <= 9) {
              coordinates.classList.add('color');
            }
          }
        } else {
          for (let k = 0; k < length; k++) {
            let coordinates = document.querySelector(`.s${parseInt(x)+ k}${y}`);
            if ((parseInt(x) + k) >= 0 && parseInt(x) + k <= 9) {
              coordinates.classList.add('color');
            }
          }
        }
        counter++;
        if (counter >= 5) {
          let setup = document.querySelector('.setup');
          let ships = document.querySelector('.board');
          let btns = document.querySelector('.gameBtns');
          let axis = document.querySelector('.axis');
          setup.removeChild(axis);
          btns.style.display = 'block';
          while (ships.firstChild) {
            ships.removeChild(ships.firstChild)
          }
        }
      });
      board.appendChild(square);
    }
  }
  setup.appendChild(board);
};

const renderBoards = (board1, board2) => {
  const boards = document.querySelector('.boards');
  let div1 = document.createElement('div');
  div1.classList.add('board');
  let div2 = document.createElement('div');
  div2.classList.add('board');
  for (let i = 0; i < numberOfSquares; i++) {
    for (let j = 0; j < numberOfSquares; j++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.classList.add('one');
      square.dataset.x = i;
      square.dataset.y = j;
      div1.appendChild(square);
    }
  }

  for (let i = 0; i < numberOfSquares; i++) {
    for (let j = 0; j < numberOfSquares; j++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.classList.add('two');
      square.dataset.x = i;
      square.dataset.y = j;
      div2.appendChild(square);
    }
  }

  boards.appendChild(div1);
  boards.appendChild(div2);

  let player1Board = board1;
  let p1Board = []
  for (let i = 0; i < numberOfSquares; i++) {
    for (let j = 0; j < numberOfSquares; j++) {
      p1Board.push(player1Board[i][j]);
    }
  }

  let onesquares = document.querySelectorAll('.one');
  onesquares.forEach((one) => {
    one.classList.add(p1Board[0]);
    p1Board.shift();
  });

  let player2Board = board2;
  let p2Board = [];
  for (let i = 0; i < numberOfSquares; i++) {
    for (let j = 0; j < numberOfSquares; j++) {
      p2Board.push(player2Board[i][j]);
    }
  }
  let twosquares = document.querySelectorAll('.two');
  twosquares.forEach((two) => {
    two.classList.add(p2Board[0]);
    p2Board.shift();
  });
};

const deleteBoards = () => {
  const boards = document.querySelector('.boards');
  while (boards.firstChild) {
    boards.removeChild(boards.firstChild);
  }
};

const displayWinner = (player) => {
  const name = player.getName();
  const message = document.querySelector('.message');
  message.innerText = name + ' Wins!';
}

const renderButtons = (player1, player2) => {
  let oneSquares = document.querySelectorAll('.one');
  let player1Gameboard = player1.getGameboard();
  oneSquares.forEach((onesquare) => {
    onesquare.addEventListener('click', () => {
      player1Gameboard.receiveAttack(onesquare.dataset.x, onesquare.dataset.y);
    });
  });
  let twoSquares = document.querySelectorAll('.two');
  let player2Gameboard = player2.getGameboard();
  twoSquares.forEach((twosquare) => {
    twosquare.addEventListener('click', () => {
      const attack2 = player2Gameboard.receiveAttack(twosquare.dataset.x, twosquare.dataset.y);
      // check that attack is valid
      if (attack2 === 'invalid') {
        return;
      }
      // check game status
      if (player2Gameboard.allSunk()) {
        // gameover player 1 wins
        deleteBoards();
        renderBoards(player1Gameboard.getBoard(), player2Gameboard.getBoard());
        displayWinner(player1);
        console.log('player 1 wins');
        return;
      }
      // changeTurns
      player2.changeTurn();
      player1.changeTurn();
      deleteBoards();
      let x = player2.getRandomCoord();
      let y = player2.getRandomCoord();
      let attack1 = player2.launchAttack(player1Gameboard, x, y);
      // check if attack is valid
      while (attack1 === 'invalid') {
        x = player2.getRandomCoord();
        y = player2.getRandomCoord();
        attack1 = player2.launchAttack(player1Gameboard, x, y);
      }
      //check game status
      if (player1Gameboard.allSunk()) {
        // gameover player 2 wins
        deleteBoards();
        renderBoards(player1Gameboard.getBoard(), player2Gameboard.getBoard());
        displayWinner(player2);
        console.log('player 2 wins');
        return;
      }
      player2.changeTurn();
      player1.changeTurn();
      deleteBoards();
      renderBoards(player1Gameboard.getBoard(), player2Gameboard.getBoard());
      renderButtons(player1, player2);
    });
  });
};

export { setUpBoard, renderBoards, deleteBoards, renderButtons };

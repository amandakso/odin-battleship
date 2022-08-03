const numberOfSquares = 10; // number of squares in one row

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
        console.log('player 1 wins');
        console.log(player1.isTurn());
        console.log(player2.isTurn());
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
        console.log('player 2 wins');
        console.log(player1.isTurn());
        console.log(player2.isTurn());
        return;
      }
      player2.changeTurn();
      player1.changeTurn();
      deleteBoards();
      renderBoards(player1Gameboard.getBoard(), player2Gameboard.getBoard());
      renderButtons(player1, player2);
      // if not win:
      // change turns
      // check if player 2 turn
      // generate random attack
        // check game status
        // if not win:
          // change turns
        //if win: show game over
    });
  });
};

export { renderBoards, deleteBoards, renderButtons };

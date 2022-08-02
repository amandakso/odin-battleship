import { renderBoards, renderButtons } from './dom';

const playerFactory = require('./player');

const setUpGame = () => {
  const player1 = playerFactory();
  const player2 = playerFactory(); // cpu
  player2.changeTurn();
  const getPlayer1 = () => player1;
  const getPlayer2 = () => player2;
  renderBoards(player1.getGameboard().getBoard(), player2.getGameboard().getBoard());
  renderButtons(player1, player2);
  return {
    getPlayer1,
    getPlayer2,
  };
};

const startGame = (player1, player2) => {
  const player1Gameboard = player1.getGameboard();
  const player2Gameboard = player2.getGameboard();

/*
  do {
    let currentTurn = 1;
    if (player1.isTurn() === true) {
      currentTurn = 1;
    } else {
      console.log("hi");
      /*
      let x = player2.getRandomCoord();
      let y = player2.getRandomCoord();
      let status = player2.launchAttack(player1Gameboard, x, y);
      if (status === 'miss') {
        // query onesquare that has coordinates, mark as miss
        console.log("boo");
      } else if (status === 'hit') {
        // query onesquare that has coordinates, mark as hit
        console.log("yay");
      }
      player2.changeTurn();
      player1.changeTurn();
      
    }
  }
  while (player1Gameboard.allSunk() === false && player2Gameboard.allSunk() === false);
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
*/
};

export { setUpGame, startGame };

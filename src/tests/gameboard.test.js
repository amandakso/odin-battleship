const gameboardFactory = require('../gameboard');
const playerFactory = require('../player');

const player1 = playerFactory();
const player1Gameboard = player1.getGameboard();
player1Gameboard.placeShip(2, 3, 2, 'vertical');

it('places ship at correct x coordinates', () => {
  const ships = player1Gameboard.getShips();
  expect(ships[0].getXCoord()).toBe(2);
});

it('places ship at correct y coordinates', () => {
  const ships = player1Gameboard.getShips();
  expect(ships[0].getYCoord()).toBe(3);
});

it('places ship wit correct orientation', () => {
  const ships = player1Gameboard.getShips();
  expect(ships[0].getOrientation()).toBe('vertical');
});

it('creates empty gameboard', () => {
  const player1Board = player1Gameboard.getBoard();
  expect(player1Board[9][9]).toBe('none');
});

it('marks board when ship is placed', () => {
  const player1Board = player1Gameboard.getBoard();
  expect(player1Board[2][3]).toBe(0);
});

it('receives attacks', () => {
  player1Gameboard.receiveAttack(2, 3);
  player1Gameboard.receiveAttack(2, 4);
  const ships = player1Gameboard.getShips();
  expect(ships[0].isSunk()).toBe(true);
});

it('reports all ships sunk', () => {
  expect(player1Gameboard.allSunk(1)).toBe(true);
});

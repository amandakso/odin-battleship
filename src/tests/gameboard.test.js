const gameboardFactory = require('../gameboard');

const gameboard = gameboardFactory();
gameboard.placeShip(2, 3, 2, 'vertical', 1);

it('places ship at correct x coordinates', () => {
  const ships = gameboard.getPlayer1Ships();
  expect(ships[0].getXCoord()).toBe(2);
});

it('places ship at correct y coordinates', () => {
  const ships = gameboard.getPlayer1Ships();
  expect(ships[0].getYCoord()).toBe(3);
});

it('places ship wit correct orientation', () => {
  const ships = gameboard.getPlayer1Ships();
  expect(ships[0].getOrientation()).toBe('vertical');
});

it('creates empty gameboard', () => {
  const player1Board = gameboard.getPlayer1Board();
  expect(player1Board[9][9]).toBe(null);
});

it('marks board when ship is placed', () => {
  const player1Board = gameboard.getPlayer1Board();
  expect(player1Board[2][3]).toBe(0);
});

it('receives attacks', () => {
  gameboard.receiveAttack(2, 3, 1);
  gameboard.receiveAttack(2, 4, 1);
  const ships = gameboard.getPlayer1Ships();
  expect(ships[0].isSunk()).toBe(true);
});

it('reports all ships sunk', () => {
  expect(gameboard.allSunk(1)).toBe(true);
});

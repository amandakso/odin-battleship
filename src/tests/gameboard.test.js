const gameboardFactory = require('../gameboard');

it('places ship at correct x coordinates', () => {
  const gameboard = gameboardFactory();

  gameboard.placeShip(2, 3, 4, 'vertical', 1);
  const ships = gameboard.getPlayer1Ships();
  expect(ships[0].getXCoord()).toBe(2);
});

it('places ship at correct y coordinates', () => {
  const gameboard = gameboardFactory();

  gameboard.placeShip(2, 3, 4, 'vertical', 1);
  const ships = gameboard.getPlayer1Ships();
  expect(ships[0].getYCoord()).toBe(3);
});

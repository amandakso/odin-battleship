const playerFactory = require('../player');

const player1 = playerFactory();

it('changes player turn', () => {
  player1.changeTurn();
  expect(player1.isTurn()).toBe(false);
})
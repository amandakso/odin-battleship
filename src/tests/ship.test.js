const shipFactory = require('../ship');

it('reports ship sunk status', () => {
  const ship = shipFactory(4);
  ship.setUp();
  ship.hit(1);
  expect(ship.isSunk()).toBe(false);
});

it('marks ship hits', () => {
  const ship = shipFactory(3);
  ship.setUp();
  ship.hit(2);
  expect(ship.getMarks()).toStrictEqual(['O', 'O', 'X']);
})

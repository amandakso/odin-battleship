const shipFactory = (num) => {
  const marks = [];
  let x = 0;
  let y = 0;
  const getMarks = () => marks;
  let hitCounter = 0;
  const setUp = () => {
    for (let i = 0; i < num; i++) {
      marks.push('O');
    }
  };
  const hit = (location) => {
    marks[location] = 'X';
    hitCounter += 1;
  };
  const isSunk = () => {
    if (hitCounter === num) {
      return true;
    }
    return false;
  };
  return {
    hit,
    setUp,
    getMarks,
    isSunk,
  };
};

module.exports = shipFactory;


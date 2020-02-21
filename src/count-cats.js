module.exports = function countCats(backyard) {
  let catsTotal = 0;
  backyard.forEach(el => {
    catsTotal += el.filter(el => el === '^^').length;
  });
  return catsTotal;
};

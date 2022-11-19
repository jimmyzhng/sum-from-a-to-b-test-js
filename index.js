
// Our base case, when i = toN
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let total = 0;

  while (fromN <= toN) {
    return total += fromN + sum(fromN + 1, toN);
  }

  return total;
}

module.exports = sum;

// 3 + sum(4, toN);
// 3 + 4 + sum(5, toN) + ... + sum(toN, toN);
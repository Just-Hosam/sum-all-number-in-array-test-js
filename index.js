function sumItems(array) {
  // Sum all the numbers in the array
  return array.reduce(((acc, cur) => {
    if (Array.isArray(cur)) {
      return acc + sumItems(cur);
    } else {
      return acc + cur;
    }
  }), 0);
}

module.exports = sumItems;
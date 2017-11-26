function bubbleSort (numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    for (let i = 0; i < numberArray.length; i ++) {
      if (numberArray[i] > numberArray[i + 1]) {
        [ numberArray[i], numberArray[ i + 1]] = [numberArray[ i + 1], numberArray[i]]
      };
    };
  };
  return numberArray
};

module.exports = bubbleSort

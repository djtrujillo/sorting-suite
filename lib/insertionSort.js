function insertionSort(unsorted) {
  var sorted = [];
  var unsortedItem = unsorted.shift();
  sorted.push(unsortedItem);
  while (unsorted.length != 0) {
    var unsortedItem = unsorted.shift();
    for (i = 0; i < sorted.length; i++) {
      if (unsortedItem < sorted[i]) {
        sorted.splice(i, 0, unsortedItem);
        var unsortedItem = null
        break;
      };
    };
    if (unsortedItem != null) {
      sorted.push(unsortedItem);
    };
  };
  return sorted
};

module.exports = insertionSort

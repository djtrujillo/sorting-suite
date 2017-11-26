const insertionSort = require('../lib/insertionSort.js')
const assert = require('chai').assert

describe('insertionSort', function() {
  it('is a function', function() {
    assert.isFunction(insertionSort)
  });

  it('sorts an array of 2 numbers', function() {
    assert.deepEqual(insertionSort([2,1]), [1,2])
  });

  it('sorts an array of 10 numbers', function() {
    assert.deepEqual(insertionSort([10,8,9,6,7,4,5,2,3,1]), [1,2,3,4,5,6,7,8,9,10])
  });

  it('sorts an array of letters', function() {
    assert.deepEqual(insertionSort(['c','b','a']), ['a','b','c'])
  })

})

const bubbleSort = require('../lib/bubbleSort.js')
const assert = require('chai').assert

describe('bubbleSort', function() {
    it('is a function', function() {
      assert.isFunction(bubbleSort)
    });

    it('can sort an array of two numbers', function () {
      assert.deepEqual(bubbleSort([2,1]), [1,2]);
    });

    it('can sort an array of ten numbers', function() {
      assert.deepEqual(bubbleSort([10,3,5,6,4,8,8,3,1,11]), [1,3,3,4,5,6,8,8,10,11])
    });

})

const deepEqual = require('./deep-equal');

function _fibonacci(num) {
  const result = [];

  for (let index = 0; index < num; index++) {
    if (index === 0) {
      result.push(0);
    } else if (index === 1) {
      result.push(1);
    } else {
      result.push(result[index - 2] + result[index - 1]);
    }
  }

  return result;
}

console.assert(deepEqual([0, 1, 1, 2, 3, 5, 8], _fibonacci(7)));

function fibonacci(index) {
  return _fibonacci(index + 1)[index];
}

console.assert(deepEqual(13, fibonacci(7)));

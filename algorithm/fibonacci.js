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

console.assert(_fibonacci(7).length === 7);
console.assert(_fibonacci(7)[0] === 0);
console.assert(_fibonacci(7)[1] === 1);
console.assert(_fibonacci(7)[2] === 1);
console.assert(_fibonacci(7)[3] === 2);
console.assert(_fibonacci(7)[4] === 3);
console.assert(_fibonacci(7)[5] === 5);
console.assert(_fibonacci(7)[6] === 8);

function fibonacci(index) {
  return _fibonacci(index + 1)[index];
}

console.assert(fibonacci(3) === 2);

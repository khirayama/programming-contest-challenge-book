const deepEqual = require('./deep-equal');

function binarySearch(items, value){
  let startIndex = 0;
  let stopIndex = items.length - 1;
  let middle = Math.floor((stopIndex + startIndex) / 2);

  while(
    items[middle] !== value &&
    startIndex < stopIndex
  ) {
    if (value < items[middle]) {
      stopIndex = middle - 1;
    } else if (value > items[middle]) {
      startIndex = middle + 1;
    }
    middle = Math.floor((stopIndex + startIndex) / 2);
  }

  return (items[middle] !== value) ? -1 : middle;
}

console.assert(5, binarySearch(
  ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  'f'
));

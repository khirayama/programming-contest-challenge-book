const items = [3, 9, 6, 5, 1, 2, 4, 0, 7, 8, 2, 6];

/*****************************************
  mergeSort

max: O(n log n)
min: O(n log n)
ave: O(n log n)
 *****************************************/

function mergeSort(items) {
  if (items.length < 2) {
    return items;
  }

  const middle = parseInt(items.length / 2);
  const left = items.slice(0, middle);
  const right = items.slice(middle, items.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

console.log('merge sort:', mergeSort(items));

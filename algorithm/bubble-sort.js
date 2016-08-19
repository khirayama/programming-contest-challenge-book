const items = [3, 9, 6, 5, 1, 2, 4, 0, 7, 8, 2, 6];

function swap(items, indexA, indexB) {
  const items_ = items.concat();

  const temp = items_[indexA];
  items_[indexA] = items_[indexB];
  items_[indexB] = temp;

  return items_;
}

/*****************************************
  bubbleSort

  max: O(n^2)
  min: O(n)
  ave: O(n^2)

  ex)
  [0, 2, 3, 1]
  len = 4
  i, j, a, b, swap,  items
  0, 0, 0, 2, false, [0, 2, 3, 1]
  0, 1, 2, 3, false, [0, 2, 3, 1]
  0, 3, 3, 1, true,  [0, 2, 1, 3]
  1, 0, 0, 2, false, [0, 2, 1, 3]
  1, 1, 2, 1, true,  [0, 1, 2, 3]
  1, 2, 2, 3, false, [0, 1, 2, 3]
  1, 2, 2, 3, false, [0, 1, 2, 3]
*****************************************/

function bubbleSort(items) {
  let items_ = items.concat();
  for (var i = 0; i < items_.length; i++) {
    for (var j = 0; j < items_.length - i - 1; j++) {
      if (items_[j] > items_[j + 1]) {
        items_ = swap(items_, j, j + 1);
      }
    }
  }
  return items_;
}


/*****************************************
  quickSort

  max: O(n^2)
  min: O(n log n)
  ave: O(n log n)

  ex)
  [0, 2, 4, 3, 1]
  len = 5
  left, right, pivot, newPivot, items
*****************************************/

function quickSort(items, leftIndex, rightIndex) {
  let items_ = items.concat();
  console.log(items_);
  const pivotIndex = leftIndex + Math.ceil((rightIndex - leftIndex) / 2);

  const pivot = items[pivotIndex];
  console.log(`leftIndex: ${leftIndex}(${items_[leftIndex]}), rightIndex: ${rightIndex}(${items_[rightIndex]}), pivotIndex: ${pivotIndex}(${pivot})`);

  let i = null;
  for (let index = 0; index < items_.length; index++) {
    const item = items_[index];
    if (i === null && item < pivot) {
      i = index;
    }
  }
  if (i === null) {
    i = leftIndex;
  }

  let j = null;
  for (let index = items_.length - 1;  0 <= index; index--) {
    const item = items_[index];
    if (j === null && pivot < item) {
      j = index;
    }
  }
  if (j === null) {
    j = rightIndex;
  }

  console.log(`i: ${i} - ${items_[i]}, j: ${j} - ${items_[j]}`);
  if (i < j) {
    items_ = swap(items_, i, j);
    return [
      ...quickSort(items_, leftIndex, pivotIndex - 1),
      ...quickSort(items_, pivotIndex, rightIndex)
    ];
  }
  return items_;
}


// run
console.log('bubble sort:', bubbleSort(items));
// console.log('quick sort:', quickSort(items, 0, items.length - 1));
const newItems = [40,  20, 50, 30, 10];
console.log('quick sort:', quickSort(newItems, 0, newItems.length - 1));

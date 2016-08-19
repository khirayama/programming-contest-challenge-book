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


console.log('bubble sort:', bubbleSort(items));

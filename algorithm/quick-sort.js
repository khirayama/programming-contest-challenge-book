// const items = [3, 9, 6, 5, 1, 2, 4, 0, 7, 8, 2, 6];

function swap(items, indexA, indexB) {
  const items_ = items.concat();

  const temp = items_[indexA];
  items_[indexA] = items_[indexB];
  items_[indexB] = temp;

  return items_;
}

/*****************************************
  quickSort

  max: O(n^2)
  min: O(n log n)
  ave: O(n log n)
*****************************************/
function partition(items, leftIndex, rightIndex) {
  console.log(items);
  let items_ = items.concat();

  const pivotIndex = Math.floor((rightIndex + leftIndex) / 2);
  const pivot = items_[pivotIndex];

  let i = leftIndex;
  let j = rightIndex;

  while (i <= j) {
    while (items_[i] < pivot) {
      i += 1;
    }
    while (items_[j] > pivot) {
      j -= 1;
    }
    if (i <= j) {
      console.log(pivotIndex, i, j, items_);
      items_ = swap(items_, i, j);
      i += 1;
      j -= 1;
    }
  }

  return {
    items: items_,
    index: i
  };
}

function quickSort(items, left, right) {
  let items_ = items.concat();
  var index;
  if (items_.length > 1) {
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items_.length - 1 : right;

    result = partition(items_, left, right);
    items_ = result.items;
    index = result.index;

    if (left < index - 1) {
      items_ = quickSort(items_, left, index - 1);
    }
    if (index < right) {
      items_ = quickSort(items_, index, right);
    }
  }
  return items_;
}


// console.log('quick sort:', quickSort(items, 0, items.length - 1));
const newItems = [8, 4, 3, 7, 6, 5, 2, 1];
console.log('quick sort:', quickSort(newItems, 0, newItems.length - 1));

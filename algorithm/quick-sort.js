const items = [3, 9, 6, 5, 1, 2, 4, 0, 7, 8, 2, 6];

function swap(items, indexA, indexB) {
  const temp = items[indexA];
  items[indexA] = items[indexB];
  items[indexB] = temp;
}

/*****************************************
  quickSort

  max: O(n^2)
  min: O(n log n)
  ave: O(n log n)
*****************************************/
function partition(items, leftIndex, rightIndex) {
  const pivotIndex = Math.floor((rightIndex + leftIndex) / 2);
  const pivot = items[pivotIndex];

  let i = leftIndex;
  let j = rightIndex;

  while (i <= j) {
    while (items[i] < pivot) {
      i += 1;
    }
    while (items[j] > pivot) {
      j -= 1;
    }
    if (i <= j) {
      swap(items, i, j);
      i += 1;
      j -= 1;
    }
  }

  return i;
}

function quickSort(items, leftIndex, rightIndex) {
  const pivotIndex = partition(items, leftIndex, rightIndex);

  if (leftIndex < pivotIndex - 1) {
    quickSort(items, leftIndex, pivotIndex - 1);
  }
  if (pivotIndex < rightIndex) {
    quickSort(items, pivotIndex, rightIndex);
  }
  return items;
}


console.log('quick sort:', quickSort(items, 0, items.length - 1));

// function swap(items, indexA, indexB) {
//   const items_ = items.concat();
//
//   const temp = items_[indexA];
//   items_[indexA] = items_[indexB];
//   items_[indexB] = temp;
//
//   return items_;
// }
//
// function partition(items, leftIndex, rightIndex) {
//   let items_ = items.concat();
//
//   const pivotIndex = Math.floor((rightIndex + leftIndex) / 2);
//   const pivot = items_[pivotIndex];
//
//   let i = leftIndex;
//   let j = rightIndex;
//
//   while (i <= j) {
//     while (items_[i] < pivot) {
//       i += 1;
//     }
//     while (items_[j] > pivot) {
//       j -= 1;
//     }
//     if (i <= j) {
//       items_ = swap(items_, i, j);
//       i += 1;
//       j -= 1;
//     }
//   }
//
//   return {
//     items: items_,
//     index: i
//   };
// }
//
// function quickSort(items, leftIndex, rightIndex) {
//   const result = partition(items, leftIndex, rightIndex);
//
//   let items_ = result.items;
//   let pivotIndex = result.index;
//
//   if (leftIndex < pivotIndex - 1) {
//     items_ = quickSort(items_, leftIndex, pivotIndex - 1);
//   }
//   if (pivotIndex < rightIndex) {
//     items_ = quickSort(items_, pivotIndex, rightIndex);
//   }
//   return items_;
// }

const items = [3, 9, 6, 5, 1, 2, 4, 0, 7, 8, 2, 6];

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

function swap(items, indexA, indexB){
  var temp = items[indexA];
  items[indexA] = items[indexB];
  items[indexB] = temp;
}

function bubbleSort(items){
  const len = items.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0, stop = len - i; j < stop; j++) {
      if (items[j] > items[j + 1]) {
        swap(items, j, j + 1);
      }
    }
  }
  return items;
}

console.log('bubble sort:', bubbleSort(items));

module.exports = bubbleSort;

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
//
// function bubbleSort(items) {
//   let items_ = items.concat();
//   for (var i = 0; i < items_.length; i++) {
//     for (var j = 0; j < items_.length - i - 1; j++) {
//       if (items_[j] > items_[j + 1]) {
//         items_ = swap(items_, j, j + 1);
//       }
//     }
//   }
//   return items_;
// }

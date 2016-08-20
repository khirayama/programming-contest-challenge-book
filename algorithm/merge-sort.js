const items = [3, 9, 6, 5, 1, 2, 4, 0, 7, 8, 2, 6];

function swap(items, indexA, indexB) {
  const items_ = items.concat();

  const temp = items_[indexA];
  items_[indexA] = items_[indexB];
  items_[indexB] = temp;

  return items_;
}

/*****************************************
  mergeSort

  max: O(n log n)
  min: O(n log n)
  ave: O(n log n)
*****************************************/

function divid(items) {
  let items_ = items.concat();

  const numOfItem = Math.ceil(items_.length / 2);

  const items1 = items_.slice(0, numOfItem);
  const items2 = items_.slice(numOfItem, numOfItem * 2);

  if (items1.length == 2) {
    return [items1, items2];
  }
  return [divid(items1), divid(items2)];
}

function mergeSort(items) {
  let items_ = items.concat();

  const dividedItems = divid(items_);
}

console.log('merge sort:', JSON.stringify(mergeSort(items)));

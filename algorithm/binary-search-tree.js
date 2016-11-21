class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  add() {}
  contains(value) {
    let found = false;
    let current = this._root;

    while(!found && current) {
      if (value < current.value){
        current = current.left;
      } else if (value > current.value){
        current = current.right;
      } else {
        found = true;
      }
    }

    return found;
  }
  remove() {}
  size() {}
  toArray() {}
  toString() {}
}

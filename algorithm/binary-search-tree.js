class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  add() {
    const node = {
      value,
      left: null,
      right: null
    };
    let current;

    if (this._root === null) {
      this._root = node;
    } else {
      current = this._root;
      while(true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null){
            current.right = node;
            break;
          } else {
            current = current.right;
          }
        } else {
          break;
        }
      }
    }
  }
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

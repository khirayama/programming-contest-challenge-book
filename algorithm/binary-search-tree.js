class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  add(value) {
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
  // private
  _traverse(process) {
    function inOrder(node) {
      if (node) {
        if (node.left !== null) {
          inOrder(node.left);
        }
        process.call(this, node);
        if (node.right !== null) {
          inOrder(node.right);
        }
      }
    }
    inOrder(this._root);
  }
  remove() {}
  size() {}
  toArray() {}
  toString() {}
}

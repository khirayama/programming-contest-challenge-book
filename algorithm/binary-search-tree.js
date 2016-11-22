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
  remove(value) {
    let found = false;
    let parent = null;
    let current = this._root;

    while (!found && current) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value){
        parent = current;
        current = current.right;
      } else {
        found = true;
      }
    }

    let childCount;
    let replacement;
    let replacementParent;

    if (found) {
      childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);

      if (current === this._root) {
        switch (childCount) {
          case 0:
            this._root = null;
            break;
          case 1:
            this._root = (current.right === null ? current.left : current.right);
            break;
          case 2:
            replacement = this._root.left;
            while (replacement.right !== null) {
              replacementParent = replacement;
              replacement = replacement.right;
            }
            if (replacementParent !== null) {
              replacementParent.right = replacement.left;
              replacement.right = this._root.right;
              replacement.left = this._root.left;
            } else {
              replacement.right = this._root.right;
            }
            this._root = replacement;
        }
      } else {
        switch (childCount) {
          case 0:
            if (current.value < parent.value) {
              parent.left = null;
            } else {
              parent.right = null;
            }
            break;
          case 1:
            if (current.value < parent.value) {
              parent.left = (current.left === null ? current.right : current.left);
            } else {
              parent.right = (current.left === null ? current.right : current.left);
            }
            break;
          case 2:
            replacement = current.left;
            replacementParent = current;
            while(replacement.right !== null) {
              replacementParent = replacement;
              replacement = replacement.right;
            }
            replacementParent.right = replacement.left;
            replacement.right = current.right;
            replacement.left = current.left;
            if (current.value < parent.value) {
              parent.left = replacement;
            } else {
              parent.right = replacement;
            }
        }
      }
    }
  }
  size() {
    const length = 0;

    this._traverse((node) => {
      length++;
    });

    return length;
  }
  toArray() {
    const result = [];

    this._traverse((node) => {
      result.push(node.value);
    });

    return result;
  }
  toString() {
    return this.toArray().toString();
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
}

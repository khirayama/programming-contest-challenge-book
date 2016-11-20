class DoublyLinkedList {
  constructor() {
    this._length = 0;
    this._head = null;
    this._tail = null;
  }
  add(data) {
    const node = {
      data,
      next: null,
      prev: null,
    };

    if (this._head === null) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    this._length++;
  }
  item(index) {
    if (index > -1 && index < this._length) {
      let current = this._head;
      let i = 0;

      while (i++ < index) {
        current = current.next;
      }

      return current.data;
    } else {
      return null;
    }
  }
  remove(index) {
    if (index > -1 && index < this._length) {
      let current = this._head;
      let i = 0;

      if (index === 0) {
        this._head = current.next;
        if (!this._head) {
          this._tail = null;
        } else {
          this._haed.prev = null;
        }
      } else if (index === this._length - 1) {
        current = this._tail;
        this._tail = current.prev;
        this._tail.next = null;
      } else {
        while (i++ < index) {
          current = current.next;
        }
        current.prev.next = current.next;
      }
      this._length--;

      return current.data;
    } else {
      return null;
    }
  }
}

var list = new DoublyLinkedList();

list.add("red");
list.add("orange");
list.add("yellow");

console.log(list.item(1));   //"orange"

list.remove(1);

console.log(list.item(1));   //"yellow"

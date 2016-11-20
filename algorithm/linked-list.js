class LinkedList {
  constructor() {
    this._length = 0;
    this._head = null;
  }
  add(data) {
    const node = {
      data,
      next: null
    };
    let current;

    if (this._head === null) {
      this._head = node;
    } else {
      current = this._head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
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
      let previous;
      let i = 0;

      if (index === 0) {
        this._head = current.next;
      } else {
        while (i++ < index) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this._length--;
      return current.data;
    } else {
      return null;
    }
  }
}

var list = new LinkedList();

list.add("red");
list.add("orange");
list.add("yellow");

console.log(list.item(1));   //"orange"

list.remove(1);

console.log(list.item(1));   //"yellow"

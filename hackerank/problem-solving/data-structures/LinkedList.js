class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first node
  insertFirst(data) {
    // create a new node with provided data and push the existing data to next
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insert last node
  insertLast(data) {
    let node = new Node(data);
    // if empty make this head
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // insert at index
  insertAt(data, index) {
    if (index > this.size) {
      throw "Array index out of bound";
    }
    let node = new Node(data);
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    if (index === this.size) {
      this.insertLast(data);
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  // get at index
  getAtIndex(index) {
    if (index > this.size) {
      throw "Array index out of bound";
    }
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    console.log("Data at index " + index + " is " + current.data);
    return current.data;
  }

  // remove at index
  removeAtIndex(index) {
    if (index > 0 && index > this.size) {
      throw "Array index out of bound";
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  // clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // print list
  printList() {
    console.log("List size is ", this.size);
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  reverseList() {
    let newHead;
    let count = 0;
    while (this.head) {
      let current = this.head;
      let prev;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      if (newHead) {
        let cur = newHead;
        while (cur.next) {
          cur = cur.next;
        }
        cur.next = current;
      } else {
        newHead = current;
      }
      if (prev) {
        prev.next = null;
      } else {
        this.head = null;
      }
      count++;
    }
    this.head = newHead;
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const head = new LinkedList();
head.insertFirst(100);
head.insertLast(200);
head.insertLast(300);
head.insertLast(50);
head.printList();
head.reverseList();
head.printList();

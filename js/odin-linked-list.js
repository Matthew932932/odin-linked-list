#!/usr/bin/env node

// your code

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  // Append: Insert a new node at the end of the linked list
  append(data) {
    const newNode = new ListNode(data);
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
  }

  // Prepend: Insert a new node at the beginning of the linked list
  prepend(data) {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Delete: Remove the first occurrence of a node with the given data
  delete(data) {
    if (!this.head) {
        return; // List is empty
    }
    if (this.head.data === data) {
        this.head = this.head.next;
        return;
    }
    let current = this.head;
    while (current.next !== null) {
        if (current.next.data === data) {
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }
  }

  // Print: Display the elements of the linked list
  print() {
    let current = this.head;
    const elements = [];
    while (current !== null) {
        elements.push(current.data);
        current = current.next;
    }
    console.log(elements.join(' -> '));
  }

  // Search: Find the first occurrence of a node with the given data
  search(data) {
    let current = this.head;
    while (current !== null) {
        if (current.data === data) {
            return true; // Data found
        }
        current = current.next;
    }
    return false; // Data not found
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
  }

  getFirst() {
    return this.head;
  }

}

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let list = new LinkedList();
let node1 = new ListNode(2);
list.head = node1;
let node2 = new ListNode(5);
let node3 = new ListNode(4);
node1.next = node2;
node2.next = node3;
list.append(7);
list.prepend(9);
list.prepend(15);
list.prepend(40);
list.prepend(35);
list.prepend(21);
list.print();
list.delete(9);
list.print();
console.log(list.search(40));
console.log(list.search(55));



console.log("node 2 data: " + list.head.next.data);
console.log("size: " + list.size())
console.log("getLast: " + list.getLast().data)
console.log("getFirst: " + list.getFirst().data)

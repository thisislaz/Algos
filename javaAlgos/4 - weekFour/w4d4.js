import {Stack} from "./w4d1.mjs"


class Node {
  constructor(data) {
    this.data = data;
    this.next;
  }
}

/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }


  isEmpty() {
    if (this.head == null) {
      return true;
    }
    return false;
  }


  enqueue(item) {
    if (this.isEmpty()) {
      this.head = item;
      this.tail = item;
      this.length++;
      return this.length;
    }
    this.tail.next = item;
    this.tail = item;
    this.length++;
    return this.length;
  }


  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    var popNode = this.head;
    this.head = this.head.next;
    popNode.next = null;
    this.length--;
    return popNode;
  }


  front() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.head.data;
  }

  /**
   * Determines whether the sum of the left half of the queue items is equal to
   * the sum of the right half. Avoid indexing the queue items directly via
   * bracket notation, use the queue methods instead for practice.
   * Use no extra array or objects.
   * The queue should be returned to it's original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Whether the sum of the left and right halves is equal.
   */
  isSumOfHalvesEqual() {
    const len = this.size();

    if (len % 2 !== 0) {
      return false;
    }

    const halfLen = len / 2;
    let leftSum = 0;
    let rightSum = 0;
    let count = 0;

    while (count < len) {
      const dequeued = this.dequeue();

      if (count < halfLen) {
        leftSum += dequeued;
      } else {
        rightSum += dequeued;
      }

      count++;
      this.enqueue(dequeued);
    }
    return leftSum === rightSum;
  }

  /**
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    return this.length;
  }
}

const newQueue1 = new Queue();
const newQueue2 = new Queue();
const newQueue3 = new Queue();
const newNode1 = new Node(1);
const newNode2 = new Node(2);
const newNode3 = new Node(3);
const newNode4 = new Node(4);
// Queue 1 = [head -> 1,2,3,4 <-tail]
newQueue1.enqueue(newNode1)
newQueue1.enqueue(newNode2)
newQueue1.enqueue(newNode3)
newQueue1.enqueue(newNode4)
// Queue 2 = [head -> 1,2,3,4 <-tail]
newQueue2.enqueue(newNode1)
newQueue2.enqueue(newNode2)
newQueue2.enqueue(newNode3)
newQueue2.enqueue(newNode4)
// Queue 3 = [head -> 1,2,3,3,2,1 <-tail]
newQueue3.enqueue(newNode1)
newQueue3.enqueue(newNode2)
newQueue3.enqueue(newNode3)
newQueue3.enqueue(newNode3)
newQueue3.enqueue(newNode2)
newQueue3.enqueue(newNode1)

const stack = new Stack();
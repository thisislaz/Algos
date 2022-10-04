class ListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
  
    constructor() {
      this.head = null;
    }
  
    isEmpty() {
      if (this.head) {
        return false;
      } else {
        return true;
      }
    }
  
    /**
     * Concatenates the nodes of a given list onto the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {SinglyLinkedList} addList An instance of a different list whose
     *    whose nodes will be added to the back of this list.
     * @returns {SinglyLinkedList} This list with the added nodes.
     */
    concat(addList, runner = this.head) {
      if (runner.isEmpty()) runner = addList.head;
      else while (runner.next) {
        runner = runner.next;
        runner.next = addList.head;
      }
    }
  
    /**
     * Finds the node with the smallest data and moves that node to the front of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {SinglyLinkedList} This list.
     */
    moveMinToFront(runner = this.head?.next, walker = this.head) {
      let minNode = walker, flag = walker;
      while (runner) {
        if (runner.data < minNode.data) {
          flag = walker
          minNode = runner
        }
        runner = runner.next;
        walker = walker.next;
      }
      flag?.next = minNode?.next;
      minNode?.next = this.head;
      this.head = minNode;
    }
  
    // EXTRA
    /**
     * Splits this list into two lists where the 2nd list starts with the node
     * that has the given value.
     * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
     * and the return value will be a new list containing (5=>2=>4)
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The value in the node that the list should be split on.
     * @returns {SinglyLinkedList} The split list containing the nodes that are
     *    no longer in this list.
     */
    splitOnVal(val, runner = this.head) {
      const output = new SinglyLinkedList();
      
      if (this.isEmpty()) return output;
      
      if (this.head.data === val){
        output.head = this.head;
        this.head = null;
        return output;
      }
  
      while (runner.next.data != val) {
        runner = runner.next
        if(!runner) return output;
      }
      
      const newHead = runner.next;
      runner.next = null;
      output.head = newHead;
      return output;
    }
  
  
    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(arrayOfValues, runner = this.head) {
      if (runner) {
        while (runner.next) {
          runner = runner.next
        }
      } else {
        this.head = new ListNode(arrayOfValues[0])
        runner = this.head
        arrayOfValues = arrayOfValues.filter((i) => i != arrayOfValues[0])
      }
      for (const val of arrayOfValues) {
        runner.next = new ListNode(val);
        runner = runner.next
      }
    }
  
    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
    toArr() {
      const arr = [];
      let runner = this.head;
  
      while (runner) {
        arr.push(runner.data);
        runner = runner.next;
      }
      return arr;
    }
  }
  
  /******************************************************************* 
  */
  const emptyList = new SinglyLinkedList();
  
  const list1 = new SinglyLinkedList()
  list1.insertAtBackMany([44, 56, 87])
  
  const list2 = new SinglyLinkedList()
  list2.insertAtBackMany([3, 8, 7, 9, 8, 9])
  
  const list3 = new SinglyLinkedList()
  list3.insertAtBackMany([100])
  
  
  // list1.concat(list2);
  // list1.toArr()
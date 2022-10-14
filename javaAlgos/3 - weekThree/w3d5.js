class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  /**
   * A class to represent a doubly linked list and contain all of it's methods.
   * A doubly linked list is a singly linked list that can be traversed in both
   * directions.
   */
  class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    insertAtFront(data) {
      if (this.isEmpty()) {
        let node = new Node(data);
        this.head = node;
        this.tail = node;
      }
      else {
        let node1 = this.head;
        let newNode = new Node(data);
        newNode.next = node1;
        node1.prev = newNode;
        this.head = newNode;
      }
      return this;
    }
    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
      if (this.isEmpty()) {
        let node = new Node(data);
        this.head = node;
        this.tail = node;
      }
      else {
        let newNode = new Node(data);
        let node1 = this.tail;
        node1.next = newNode;
        newNode.prev = node1;
        this.tail = newNode;
      }
      return this;
    }
  
    /**
     * Inserts a new node with the given newVal after the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertAfter(targetVal, newVal) {
      
    }
    insertAfterAttempt(targetVal, newVal, runner = this.head) {
      while(runner){
          if(runner.data!= targetVal){
              runner = runner.next;
          }
          else break;
      }
      if(runner){
          let next = runner.next;
          let newNode = new Node(newVal);
          runner.next = newNode;
          newNode.prev = runner;
          newNode.next = next;
          next.prev = newNode;
      }
      else return false;
  
      return true;
  }
  
    /**
     * Inserts a new node with the given newVal before the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertBefore(targetVal, newVal) { }
    insertBeforeAttempt(targetVal, newVal, runner = this.head) {
        while(runner.next){
            if(runner.next.data!= targetVal){
                runner = runner.next;
            }
            else {
                break;
            }
        }
        if(runner.next){
            let next = runner.next;
            let newNode = new Node(newVal);
            runner.next = newNode;
            newNode.prev = runner;
            newNode.next = next;
            next.prev = newNode;
        }
        else return false;
  
        return true;
    }
    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
      return this.head === null;
    }
  
    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
      const vals = [];
      let runner = this.head;
  
      while (runner) {
        vals.push(runner.data);
        runner = runner.next;
      }
      return vals;
    }
  
    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBackMany(items = []) {
      items.forEach((item) => this.insertAtBack(item));
      return this;
    }
  }
  
  const emptyList = new DoublyLinkedList();
  
  /**************** Uncomment these test lists after insertAtBack is created. ****************/
  // const singleNodeList = new DoublyLinkedList().insertAtBack(1);
  // const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
  // const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
  // const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
  // const unorderedList = new DoublyLinkedList().insertAtBackMany([
  //   -5,
  //   -10,
  //   4,
  //   -3,
  //   6,
  //   1,
  //   -7,
  //   -2,
  // ]);
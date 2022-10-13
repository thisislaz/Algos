class Node {
    constructor(data){
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
  
    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {
      
    }
    insertAtFrontAttempt(data) {
      if(this.isEmpty()){
          let node = new Node(data);
          this.head = node;
          this.tail = node;
      }
      else{
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
    insertAtBack(data) {}
    insertAtBackAttempt(data) {
        if(this.isEmpty()){
            let node = new Node(data);
            this.head = node;
            this.tail = node;
        }
        else{
            let newNode = new Node(data);
            let node1 = this.tail;
            node1.next = newNode;
            newNode.prev = node1;
            this.tail = newNode;
        }
        return this;
    }
    // EXTRA
    /**
     * Removes the middle node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */
    listLengthRecursive(runner = this.head, count=0){
        if(runner){
            return this.listLengthRecursive(runner.next, count+=1);
        }
        return count;
    }
  
    indexOf(data, runner = this.head, count=0){
        if(!runner) return null;
        if(runner.data != data) return this.indexOf(data, runner.next, count+=1);
        return count;
    }
  
    removeElement(data){
        if(this.isEmpty()){
            return null;
        }
        let targetIndex = this.indexOf(data);
        let index = 0;
        let runner = this.head
        while(index != targetIndex){
            index ++;
            runner = runner.next;
        }
        let prev = runner.prev;
        let next = runner.next;
        prev.next = next;
        next.prev = prev;
        runner.prev = null;
        runner.next = null;
        return runner;
    }
    
    removeMiddleNode() {}
    removeMiddleNodeAttempt(runner = this.head) {
        if(!runner){
            return null;
        }
        let index = 0;
        while(runner){
            index++;
            runner = runner.next;
        }
        if(index%2 == 0){
            return null;
        }
        let middleIndex = Math.ceil(index/2);
        index = 1;
        runner = this.head
        while(index != middleIndex){
            index ++;
            runner = runner.next;
        }
        let prev = runner.prev;
        let next = runner.next;
        prev.next = next;
        next.prev = prev;
        runner.prev = null;
        runner.next = null;
        return runner;
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
/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
 class MinHeap {
    constructor() {
      /**
       * 0th index not used, so null is a placeholder. Not using 0th index makes
       * calculating the left and right children's index cleaner.
       * This also effectively makes our array start at index 1.
       */
      this.heap = [null];
    }
  
  
      /**
     * Extracts the min num from the heap and then re-orders the heap to
     * maintain order so the next min is ready to be extracted.
     * 1. Save the first node to a temp var.
     * 2. Pop last node off and set idx1 equal to the popped value.
     * 3. Iteratively swap the old last node that is now at idx1 with it's
     *    smallest child IF the smallest child is smaller than it.
     * - Time: O(log n) logarithmic due to shiftDown.
     * - Space: O(1) constant.
     * @returns {?number} The min number or null if empty.
     */
       extract() {
        let thisHeap=this.heap;
        [thisHeap[1],thisHeap[thisHeap.length-1]]=[thisHeap[thisHeap.length-1],thisHeap[1]];
        let output = thisHeap.pop();
  
        let swappedVal=1;
        let childLeft=1*2;
        let childRight=1*2+1;
  
        while(thisHeap[swappedVal]>thisHeap[childLeft] || thisHeap[swappedVal]>thisHeap[childRight]){
            if (thisHeap[childLeft]<thisHeap[childRight]){
                [thisHeap[swappedVal],thisHeap[childLeft]]=[thisHeap[childLeft],thisHeap[swappedVal]];
                swappedVal=childLeft;
                
            }
            else{
                [thisHeap[swappedVal],thisHeap[childRight]]=[thisHeap[childRight],thisHeap[swappedVal]];
                swappedVal=childRight;
            }
            childLeft=swappedVal*2;
            childRight=swappedVal*2+1;

        }

        return output;

    }
  
  
  
     top() {
        if(this.heap[1]){
            return this.heap[1];
        }
        else return null;
    }
  
  
    insert(num, array = this.heap) {
      array.push(num);
      let lastIndex = array.length - 1;
      let parentIndex = Math.floor([lastIndex / 2]);
      while (array[lastIndex] < array[parentIndex]) {
        
        let parent = array[parentIndex];
        
        // [array[parentIndex],array[lastIndex]] = [array[lastIndex],array[parentIndex]
        array[parentIndex] = num;
        array[lastIndex] = parent;
        lastIndex = parentIndex;
        parentIndex = Math.floor([lastIndex / 2]);
      }
    }
  
    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
      if (parentIdx > this.heap.length - 1) {
        return;
      }
  
      spaceCnt += spaceIncr;
      this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);
  
      console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
          `${this.heap[parentIdx]} (${parentIdx})`
      );
  
      this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
  }
  
  const minHeap = new MinHeap(); 
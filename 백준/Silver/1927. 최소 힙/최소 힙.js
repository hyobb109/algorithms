let [n, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

class MinHeap {
  constructor() {
    this.value = [];
  }
  enqueue(x) {
    this.value.push(x);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.value.length - 1;
    let x = this.value[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.value[parentIdx];
      if (parent < x) break;
      this.value[parentIdx] = x;
      this.value[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    if (this.value.length === 0) return 0;
    const min = this.value[0];
    const end = this.value.pop();
    if (this.value.length) {
      this.value[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    let top = this.value[0];
    let len = this.value.length;
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = leftChildIdx + 1;
      let leftChild, rightChild;
      let swapIdx = null;
      if (leftChildIdx < len) {
        leftChild = this.value[leftChildIdx];
        if (leftChild < top) swapIdx = leftChildIdx;
      }
      if (rightChildIdx < len) {
        rightChild = this.value[rightChildIdx];
        if (
          (!swapIdx && rightChild < top) ||
          (swapIdx && rightChild < leftChild)
        )
          swapIdx = rightChildIdx;
      }
      if (!swapIdx) return;
      this.value[idx] = this.value[swapIdx];
      this.value[swapIdx] = top;
      idx = swapIdx;
    }
  }
}

let heap = new MinHeap();
let res = '';
input.forEach((x) => {
  x > 0 ? heap.enqueue(x) : (res += heap.dequeue() + '\n');
});

console.log(res.trim());

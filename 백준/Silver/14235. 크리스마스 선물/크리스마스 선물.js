let [n, ...spots] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

class queue {
  constructor() {
    this.val = [];
  }
  push(el) {
    this.val.push(el);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.val.length - 1;
    const el = this.val[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.val[parentIdx];
      if (el < parent) break;
      this.val[parentIdx] = el;
      this.val[idx] = parent;
      idx = parentIdx;
    }
  }
  pop() {
    if (!this.val.length) return -1;
    const max = this.val[0];
    const end = this.val.pop();
    if (this.val.length) {
      this.val[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const len = this.val.length;
    const el = this.val[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = leftChildIdx + 1;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < len) {
        leftChild = this.val[leftChildIdx];
        if (leftChild > el) swap = leftChildIdx;
      }
      if (rightChildIdx < len) {
        rightChild = this.val[rightChildIdx];
        if ((!swap && rightChild > el) || (swap && rightChild > leftChild))
          swap = rightChildIdx;
      }
      if (!swap) break;
      this.val[idx] = this.val[swap];
      this.val[swap] = el;
      idx = swap;
    }
  }
}

let giftBag = new queue();
let res = '';
spots.forEach((spot) => {
  if (spot == 0) {
    res += giftBag.pop() + '\n';
  } else {
    const gifts = spot.split(' ');
    for (let i = 1; i <= gifts[0]; i++) giftBag.push(+gifts[i]);
  }
});

console.log(res);

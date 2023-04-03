// 카드2 -> 배열로 하면 시간초과
let n = Number(require('fs').readFileSync('test.txt').toString().trim());

class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	// O(1)
	enqueue(val){
		let newNode = new Node(val);
		// 큐 size가 0일 때
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}
	// O(1)
	dequeue(){
		if (!this.first) return null;
		let tmp = this.first;
		// 큐 size가 1일 때
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return tmp.value;
	}
}

let q = new Queue();
for (let i = 1; i <= n; i++)
	q.enqueue(i);
while(q.size > 1) {
	q.dequeue();
	q.enqueue(q.dequeue());
}
console.log(q.first.value);
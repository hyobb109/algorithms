// 이진 검색 트리
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n').map(Number);

class Node {
	constructor(val) {
		this.value = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null;
	}
	insert(val){
		let newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let curr = this.root;
		while (true) {
			if (val === curr.value) return undefined;
			if (val < curr.value) {
				if (!curr.left) {
					curr.left = newNode;
					return this;
				} curr = curr.left;
			} else {
				if (!curr.right) {
					curr.right = newNode;
					return this;
				} curr = curr.right;
			}
		}
	}
}

let tree = new BinarySearchTree();
input.forEach(el => tree.insert(el));
let res = [];
function postorderTraverse(node){
	if (!node) return;
	postorderTraverse(node.left);
	postorderTraverse(node.right);
	res.push(node.value);
}

postorderTraverse(tree.root);
console.log(res.join('\n'));
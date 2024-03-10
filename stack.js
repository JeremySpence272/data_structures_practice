class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	// always adding to the "front" / "head" of the stack -- return the size
	push(val) {
		let newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		this.size++;
		return this.size;
	}

	// always removing the "front" / "head" of the stack -- return the element
	pop() {
		if (!this.first) return undefined;
		let temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}

		this.first = this.first.next; //will automatically be null if theres only one in stack
		this.size--;

		return temp;
	}
}

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newStack = new Stack();

for (let i of numArr) {
	newStack.push(i);
}

newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();

let curr = newStack.first;
while (curr) {
	console.log(curr.val);
	curr = curr.next;
}

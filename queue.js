class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

//FIFO
class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	// this should push the value to the end of the queue
	// probably going to need a while loop to get through it ??
	// return the size
	enqueue(val) {
		let newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode; // you are creating the pointer here
			this.last = newNode;
		}
		this.size++;
		return this.size;
	}

	// this is the same as the stack pop
	dequeue() {
		if (!this.first) return undefined;
		let temp = this.first;
		if (this.first === this.last) {
			this.first = null;
		}

		this.first = this.first.next;
		this.size--;
		return temp;
	}
}

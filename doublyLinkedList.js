class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	clear() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	// Problem 1: Basic Operations
	// Implement a doubly linked list with the following basic operations:

	// Insert at the End: Add a new element to the end of the list.
	// Insert at the Beginning: Add a new element to the beginning of the list.
	// Delete from the End: Remove an element from the end of the list.
	// Delete from the Beginning: Remove an element from the beginning of the list.
	// Display Forward: Print all elements from the beginning to the end.
	// Display Backward: Print all elements from the end to the beginning.
	//DONE

	// Problem 2: Insertion at a Specific Position
	// Extend your doubly linked list implementation to support inserting a new element at a specific position in the list (where the position is based on a 0-based index).

	// Problem 3: Deletion by Value
	// Implement a function to delete the first occurrence of a specific value from the list. If the value is not found, the list should remain unchanged.

	// Problem 4: Search for an Element
	// Implement a function to search for a value in the list. The function should return the position of the element (0-based index) if found, or -1 if the element is not in the list.

	// Problem 5: Reverse the List
	// Implement a function to reverse the list, so the last element becomes the first and the first element becomes the last, and so on.

	// Problem 6: Remove Duplicates
	// Write a function to remove all duplicate values from the list. Only the first occurrence of each value should remain.

	// Problem 7: Sort the List
	// Implement a sorting function to sort the elements of the list in ascending order. You can choose any sorting algorithm you are comfortable with, but consider practicing with simple ones like bubble sort or insertion sort for a start.

	// Problem 8: Merge Two Sorted Lists
	// Given two sorted doubly linked lists, write a function that merges them into a single sorted doubly linked list.

	// Bonus Problem: Implement an Iterator
	// Implement an iterator for your doubly linked list that allows traversing the list both forwards and backwards.

	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		return ++this.size;
	}

	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
		}
		this.head = newNode;
		return ++this.size;
	}

	pop() {
		if (!this.head) {
			return undefined;
		}
		let node = this.tail;

		if (this.tail.prev) {
			this.tail = this.tail.prev;
			this.tail.next = null;
		} else {
			this.head = null;
			this.tail = null;
		}
		node.prev = null;
		this.size--;
		return node;
	}

	shift() {
		if (!this.head) return undefined;
		let node = this.head;
		if (this.head.next) {
			this.head = this.head.next;
			this.head.prev = null;
		} else {
			this.head = null;
			this.tail = null;
		}
		node.next = null;
		this.size--;
		return node;
	}

	printForwards() {
		let arr = [];
		let temp = this.head;
		while (temp) {
			arr.push(temp.val);
			temp = temp.next;
		}
		return arr;
	}

	printBackwards() {
		let arr = [];
		let temp = this.tail;
		while (temp) {
			arr.push(temp.val);
			temp = temp.prev;
		}
		return arr;
	}

	insertAt(val, position) {
		if (!this.head) return undefined;
		if (position < 0 || position > this.size) return undefined;

		let node = new Node(val);
		if (position === 0) {
			this.unshift(val);
		} else if (position === this.size) {
			this.push(val);
		} else {
			let temp = this.head;
			let counter = 0;

			//iterate through the list
			while (counter != position) {
				temp = temp.next;
				counter++;
			}

			node.next = temp;
			node.prev = temp.prev;
			temp.prev.next = node;
			temp.prev = node;
			this.size++;
		}

		return this;
	}

	delete(val) {
		if (!this.head) return undefined;

		if (this.head.val === val) {
			this.shift();
			return this;
		}

		let temp = this.head;
		while (temp) {
			if (temp.val === val) break;

			if (!temp.next) return this;
			temp = temp.next;
		}
		if (temp === this.tail) {
			this.pop();
		} else {
			temp.next.prev = temp.prev;
			temp.prev.next = temp.next;
			this.size--;
		}

		return this;
	}

	search(val) {
		if (!this.head) return null;

		let temp = this.head;
		let index = 0;
		while (temp != null) {
			if (temp.val === val) {
				return index;
			}
			index++;
			temp = temp.next;
		}

		return -1;
	}

	// Problem 5: Reverse the List
	// Implement a function to reverse the list, so the last element becomes the first and the first element becomes the last, and so on. Return the list. If no list return undefined

	reverse() {
		if (!this.head) return undefined;
		if (this.size == 1) return this;

		let currentNode = this.head;
		let temp = null;

		while (currentNode != null) {
			//go through until you get to beginning
			temp = currentNode.prev;
			currentNode.prev = currentNode.next;
			currentNode.next = temp;

			currentNode = currentNode.prev;
		}
		let oldHead = this.head;
		this.head = this.tail;
		this.tail = oldHead;
		return this;
	}

	// Problem 6: Remove Duplicates
	// Write a function to remove all duplicate values from the list. Only the first occurrence of each value should remain.

	dedup() {
		if (!this.head) return undefined;
		let uniqueArr = new Set();

		let temp = this.head;
		while (temp) {
			if (!uniqueArr.has(temp.val)) {
				uniqueArr.add(temp.val);
				temp = temp.next;
			} else {
				let toDelete = temp;
				temp = temp.next;
				this.delete(toDelete.val);
			}
		}
		return this;
	}

	// Problem 7: Sort the List
	// Implement a sorting function to sort the elements of the list in ascending order. You can choose any sorting algorithm you are comfortable with, but consider practicing with simple ones like bubble sort or insertion sort for a start.

	bubbleSortNodes() {
		if (!this.head) return null;
		if (this.size == 1) return this;
		let swapped;

		do {
			swapped = false;
			let current = this.head;
			while (current && current.next) {
				if (current.val > current.next.val) {
					//SET 6 POINTERS
					let temp = current.next;
					current.next = temp.next; // A -> Y

					if (temp.next != null) {
						temp.next.prev = current; // A <- Y
					} else {
						this.tail = current; // A (theres no Y)
					}

					temp.prev = current.prev; // B <- X
					if (current.prev != null) {
						current.prev.next = temp; // X -> B
					} else {
						this.head = temp; // B (theres no X)
					}

					temp.next = current; // B -> A
					current.prev = temp; // B <-A

					swapped = true;
					continue;
				}
				current = current.next;
			}
		} while (swapped);

		return this;
	}

	bubbleSortValues() {
		if (!this.head) return null;
		if (this.size == 1) return this;
		let swapped;

		do {
			swapped = false;
			let current = this.head;
			while (current && current.next) {
				if (current.val > current.next.val) {
					let temp = current.val;
					current.val = current.next.val;
					current.next.val = temp;
					swapped = true;
				}
				current = current.next;
			}
		} while (swapped);

		return this;
	}

	// Problem 8: Merge Two Sorted Lists
	// Given two sorted doubly linked lists, write a function that merges them into a single sorted doubly linked list.

	mergeAndSort(list) {
		if (!this.head && !list.head) {
			return undefined;
		}

		if (list.head) {
			let current = list.head;
			while (current) {
				this.push(current.val);
				current = current.next;
			}
		}

		return this.bubbleSortValues();
	}
}

// Bonus Problem: Implement an Iterator
// Implement an iterator for your doubly linked list that allows traversing the list both forwards and backwards.
// FOR READ ONLY METHODS
class DoublyLinkedListIterator {
	constructor(list) {
		this.list = list;
		this.current = null;
	}

	resetToStart() {
		this.current = this.list.head;
	}

	resetToEnd() {
		this.current = this.list.tail;
	}

	next() {
		if (!this.current) {
			return undefined;
		}
		let value = this.current.val;
		this.current = this.current.next;
		return value;
	}

	prev() {
		if (!this.current) {
			return undefined;
		}
		let value = this.current.val;
		this.current = this.current.prev;
		return value;
	}

	hasNext() {
		return this.current && this.current.next !== null;
	}

	hasPrev() {
		return this.current && this.current.prev !== null;
	}

	currentValue() {
		return this.current ? this.current.val : undefined;
	}
}

let list = new DoublyLinkedList();
let sample = [1, 2, 3, 45, 7, 34, 8, 93, 3589, 2];
for (let i of sample) list.push(i);

let list2 = new DoublyLinkedList();
let sample2 = [252, 820, 168, 729, 625, 473, 399, 800, 392, 163];
for (let i of sample2) list2.push(i);

module.exports = DoublyLinkedList;

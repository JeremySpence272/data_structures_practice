class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	// Append: Add a new element to the end of the list.
	// Prepend: Insert a new element at the beginning of the list.
	// Find: Search for an element in the list by its value and return the node.

	// Delete: Remove an element from the list by its value.
	// Print: Display the list elements in order from head to tail.

	append(val) {
		let newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = this.tail.next
		}
		this.size++
		return this.size
	}

	prepend(val) {
		let newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			let temp = this.head
			this.head = newNode
			this.head.next = temp
		}
		this.size++
		return this.size
	}

	find(val) {
		let current = this.head
		while (current) {
			if (current.val === val) return current
			current = current.next
		}

		return null
	}

	delete(val) {
		if (!this.head) return null

		let current = this.head
		let deleted = null
		if (current.val === val) {
			let temp = this.head
			this.head = this.head.next
			deleted = temp
			if (!this.head) this.tail = null //last elem deleted
			this.size--
		} else {
			// while not on last value
			while (current.next) {
				if (current.next.val === val) { //if next val is val
					if (current.next.next) { //if not last val
						let nextOne = current.next.next //skip over val to delete
						deleted = current.next //grab the one youre deleting
						current.next = nextOne //set the current.next to be current.next.next
					} else {
						this.tail = current //if last val is one youre looking for set the tail to be previous one
						this.tail.next = null //set the tail to null
					}
					this.size--
					break
				}
				current = current.next
			}
		}
		return deleted
	}
}

const list = new SinglyLinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)

// Delete a middle node
list.delete(2)
console.log(list)

// Delete the head
list.delete(1)
console.log(list)

// Delete the tail
list.delete(4)
console.log(list)

// Attempt to delete a non-existent value
list.delete(5)
console.log(list)

// Delete the only remaining node
list.delete(3)
console.log(list)

// EXPORT
module.exports = SinglyLinkedList

const assert = require("assert");
const SinglyLinkedList = require("./singlyLinkedList"); // Adjust the path as necessary

function testAppend() {
	const list = new SinglyLinkedList();
	list.append(1);
	assert.strictEqual(
		list.head.val,
		1,
		"Append single item: head value should be 1"
	);
	assert.strictEqual(
		list.tail.val,
		1,
		"Append single item: tail value should be 1"
	);

	list.append(2);
	assert.strictEqual(
		list.tail.val,
		2,
		"Append second item: tail value should be 2"
	);
}

function testPrepend() {
	const list = new SinglyLinkedList();
	list.prepend(1);
	assert.strictEqual(
		list.head.val,
		1,
		"Prepend single item: head value should be 1"
	);
	assert.strictEqual(
		list.tail.val,
		1,
		"Prepend single item: tail value should be 1"
	);

	list.prepend(0);
	assert.strictEqual(
		list.head.val,
		0,
		"Prepend second item: head value should be 0"
	);
}

function testFind() {
	const list = new SinglyLinkedList();
	list.append(1);
	list.append(2);
	list.append(3);

	const found = list.find(2);
	assert.strictEqual(found.val, 2, "Find existing item: should find value 2");
	const notFound = list.find(4);
	assert.strictEqual(
		notFound,
		null,
		"Find non-existing item: should not find value 4"
	);
}

function testDelete() {
	// Initialize a new list and populate it
	const list = new SinglyLinkedList();
	list.append(1);
	list.append(2);
	list.append(3);
	list.append(4);

	// Delete a middle node
	list.delete(2);
	assert.strictEqual(
		list.find(2),
		null,
		"Delete middle item: should not find value 2 after deletion"
	);
	assert.strictEqual(
		list.size,
		3,
		"Delete middle item: size should decrease to 3"
	);

	// Delete the head
	list.delete(1);
	assert.strictEqual(
		list.head.val,
		3,
		"Delete head: head value should update to 3"
	);
	assert.strictEqual(list.size, 2, "Delete head: size should decrease to 2");

	// Delete the tail
	list.delete(4);
	assert.strictEqual(
		list.tail.val,
		3,
		"Delete tail: tail value should update to 3"
	);
	assert.strictEqual(list.size, 1, "Delete tail: size should decrease to 1");
	assert.strictEqual(
		list.head.val,
		list.tail.val,
		"When only one node left, head and tail should be the same"
	);

	// Attempt to delete a non-existent value
	list.delete(5);
	assert.strictEqual(
		list.size,
		1,
		"Delete non-existent item: size should remain unchanged"
	);

	// Delete the only remaining node
	list.delete(3);
	assert.strictEqual(list.head, null, "Delete last item: head should be null");
	assert.strictEqual(list.tail, null, "Delete last item: tail should be null");
	assert.strictEqual(
		list.size,
		0,
		"Delete last item: size should decrease to 0"
	);
}

// Function to execute a specific test based on command line argument
function runSelectedTest(testName) {
	const tests = {
		testAppend,
		testPrepend,
		testFind,
		testDelete,
	};

	if (tests[testName]) {
		try {
			tests[testName]();
			console.log(`Passed: ${testName}`);
		} catch (error) {
			console.log(`Failed: ${testName} - ${error.message}`);
		}
	} else {
		console.log(
			"Test name not recognized. Available tests are: testAppend, testPrepend, testFind, testDelete"
		);
	}
}

// Get the test name from command line arguments
const testName = process.argv[2];
runSelectedTest(testName);

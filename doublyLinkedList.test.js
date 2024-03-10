const assert = require("assert")
const DoublyLinkedList = require("./doublyLinkedList.js"); // Adjust the path as necessary

function testPush() {
    const list = new DoublyLinkedList();

    // Test 1: Insert into an empty list
    list.push(1);
    assert.strictEqual(list.head.val, 1, "Head should be 1 after first insert");
    assert.strictEqual(list.tail.val, 1, "Tail should be 1 after first insert");

    // Test 2: Insert into a list with one element
    list.push(2);
    assert.strictEqual(list.head.val, 1, "Head should remain 1 after second insert");
    assert.strictEqual(list.tail.val, 2, "Tail should be 2 after second insert");
    assert.strictEqual(list.head.next.val, 2, "Head's next should be 2 after second insert");
    assert.strictEqual(list.tail.prev.val, 1, "Tail's prev should be 1 after second insert");

    // Test 3: Insert into a list with multiple elements
    list.push(3);
    assert.strictEqual(list.tail.val, 3, "Tail should be 3 after third insert");
    assert.strictEqual(list.tail.prev.val, 2, "Tail's prev should be 2 after third insert");

    console.log('All tests passed!');
}

function testUnshift() {
    const list = new DoublyLinkedList();

    // Test 1: Insert into an empty list
    list.unshift(1);
    assert.strictEqual(list.head.val, 1, "Head should be 1 after first insert");
    assert.strictEqual(list.tail.val, 1, "Tail should be 1 after first insert");

    // Test 2: Insert into a list with one element
    list.unshift(2);
    assert.strictEqual(list.head.val, 2, "Head should be 2 after second insert");
    assert.strictEqual(list.tail.val, 1, "Tail should remain 1 after second insert");
    assert.strictEqual(list.head.next.val, 1, "Head's next should be 1 after second insert");
    assert.strictEqual(list.tail.prev.val, 2, "Tail's prev should be 2 after second insert");

    // Test 3: Insert into a list with multiple elements
    list.unshift(3);
    assert.strictEqual(list.head.val, 3, "Head should be 3 after third insert");
    assert.strictEqual(list.head.next.val, 2, "Head's next should be 2 after third insert");

    console.log('All tests passed!');
}

function testPop() {
    const list = new DoublyLinkedList();

    // Test 1: Pop from an empty list
    assert.strictEqual(list.pop(), undefined, "Pop from an empty list should return undefined");

    // Test 2: Pop from a list with one node
    list.push(1);
    let node = list.pop();
    assert.strictEqual(node.val, 1, "Pop should return the only node in the list");
    assert.strictEqual(list.head, null, "Head should be null after popping the only node");
    assert.strictEqual(list.tail, null, "Tail should be null after popping the only node");

    // Test 3: Pop from a list with more than one node
    list.push(1);
    list.push(2);
    node = list.pop();
    assert.strictEqual(node.val, 2, "Pop should return the last node in the list");
    assert.strictEqual(list.tail.val, 1, "Tail should be the first node after popping the last node");

    console.log("All tests passed!");
}

function testShift() {
    const list = new DoublyLinkedList();
    // Test 1: Shift from an empty list
    assert.strictEqual(list.shift(), undefined, "Shift from an empty list should return undefined");
    // Test 2: Shift from a list with one node
    list.push(1);
    let node = list.shift();
    assert.strictEqual(node.val, 1, "Shift should return the only node in the list");
    assert.strictEqual(list.head, null, "Head should be null after shifting the only node");
    assert.strictEqual(list.tail, null, "Tail should be null after shifting the only node");
    // Test 3: Shift from a list with more than one node
    list.push(1);
    list.push(2);
    node = list.shift();
    assert.strictEqual(node.val, 1, "Shift should return the first node in the list");
    assert.strictEqual(list.head.val, 2, "Head should be the second node after shifting the first node");
    console.log("All tests passed!");
}

function testPrintForwards() {
    const list = new DoublyLinkedList();

    // Test 1: Print an empty list
    assert.deepStrictEqual(list.printForwards(), [], "Print forwards should return an empty array for an empty list");

    // Test 2: Print a list with one element
    list.push(1);
    assert.deepStrictEqual(list.printForwards(), [1], "Print forwards should return [1] for a list with one element");

    // Test 3: Print a list with multiple elements
    list.push(2);
    list.push(3);
    assert.deepStrictEqual(list.printForwards(), [1, 2, 3], "Print forwards should return [1, 2, 3] for a list with multiple elements");
    console.log("All tests passed!")
}

function testPrintBackwards() {
    const list = new DoublyLinkedList();

    // Test 1: Print an empty list
    assert.deepStrictEqual(list.printBackwards(), [], "Print backwards should return an empty array for an empty list");

    // Test 2: Print a list with one element
    list.push(1);
    assert.deepStrictEqual(list.printBackwards(), [1], "Print backwards should return [1] for a list with one element");

    // Test 3: Print a list with multiple elements
    list.push(2);
    list.push(3);
    assert.deepStrictEqual(list.printBackwards(), [3, 2, 1], "Print backwards should return [3, 2, 1] for a list with multiple elements");
    console.log("All tests passed!")
}

function testInsertAt() {
    const list = new DoublyLinkedList();

    // Test 1: Insert into an empty list
    assert.strictEqual(list.insertAt(1, 0), undefined, "Insert into an empty list should return undefined");

    // Test 2: Insert at a negative position
    list.push(1);
    assert.strictEqual(list.insertAt(2, -1), undefined, "Insert at a negative position should return undefined");

    // Test 3: Insert at a position greater than size
    assert.strictEqual(list.insertAt(2, 2), undefined, "Insert at a position greater than size should return undefined");

    // Test 4: Insert at the beginning of the list
    list.insertAt(0, 0);
    assert.strictEqual(list.head.val, 0, "Insert at the beginning should update the head of the list");

    // Test 5: Insert at the end of the list
    list.insertAt(2, 2);
    assert.strictEqual(list.tail.val, 2, "Insert at the end should update the tail of the list");

    // Test 6: Insert in the middle of the list
    list.insertAt(1.5, 2);
    assert.strictEqual(list.head.next.next.val, 1.5, "Insert in the middle should add a node at the correct position");
    console.log("All tests passed!")
}
function testDelete() {
    const list = new DoublyLinkedList();

    // Test 1: Delete from an empty list
    assert.strictEqual(list.delete(1), undefined, "Delete from an empty list should return undefined");

    // Test 2: Delete a value not in the list
    list.push(1);
    let returnedList = list.delete(2);
    assert.strictEqual(returnedList, list, "Delete a value not in the list should return the list unchanged");
    assert.strictEqual(list.size, 1, "Size should remain unchanged when deleting a value not in the list");

    // Test 3: Delete the only value in the list
    returnedList = list.delete(1);
    assert.strictEqual(returnedList.size, 0, "Delete the only value in the list should return an empty list");
    assert.strictEqual(list.head, null, "Head should be null after deleting the only value");
    assert.strictEqual(list.tail, null, "Tail should be null after deleting the only value");

    // Test 4: Delete a value at the beginning of the list
    list.push(1);
    list.push(2);
    returnedList = list.delete(1);
    assert.strictEqual(returnedList.head.val, 2, "Delete a value at the beginning should return a list with the second value as the new head");

    // Test 5: Delete a value at the end of the list
    list.push(1);
    returnedList = list.delete(1);
    assert.strictEqual(returnedList.tail.val, 2, "Delete a value at the end should return a list with the second value as the new tail");

    // Test 6: Delete a value in the middle of the list
    list.push(1);
    list.push(3);
    returnedList = list.delete(1);
    assert.strictEqual(returnedList.head.next.val, 3, "Delete a value in the middle should return a list with the third value as the second value");

    console.log("All tests passed!")
}

function testSearch() {
    const list = new DoublyLinkedList();
    // Test 1: Search in an empty list
    assert.strictEqual(list.search(1), null, "Search in an empty list should return null");
    // Test 2: Search for a value not in the list
    list.push(1);
    assert.strictEqual(list.search(2), -1, "Search for a value not in the list should return -1");
    // Test 3: Search for the only value in the list
    assert.strictEqual(list.search(1), 0, "Search for the only value in the list should return 0");
    // Test 4: Search for a value at the beginning of the list
    list.push(2);
    assert.strictEqual(list.search(1), 0, "Search for a value at the beginning of the list should return 0");
    // Test 5: Search for a value at the end of the list
    assert.strictEqual(list.search(2), 1, "Search for a value at the end of the list should return 1");
    // Test 6: Search for a value in the middle of the list
    list.push(3);
    assert.strictEqual(list.search(2), 1, "Search for a value in the middle of the list should return the correct index");
    console.log("All tests passed!");
}

function testReverse() {
    let list = new DoublyLinkedList();

    // Test 1: Reverse an empty list
    assert.strictEqual(list.reverse(), undefined, "Reverse an empty list should return undefined");

    // Test 2: Reverse a list with one element
    list.push(1);
    let returnedList = list.reverse();
    assert.strictEqual(returnedList.head.val, 1, "Reverse a list with one element should return the same list");
    assert.strictEqual(returnedList.tail.val, 1, "Reverse a list with one element should return the same list");

    // Reset list for next test
    list = new DoublyLinkedList();
    list.push(1);
    list.push(2);

    // Test 3: Reverse a list with two elements
    returnedList = list.reverse();
    assert.strictEqual(returnedList.head.val, 2, "Reverse a list with two elements should swap the head and the tail");
    assert.strictEqual(returnedList.tail.val, 1, "Reverse a list with two elements should swap the head and the tail");

    // Reset list for next test
    list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    // Test 4: Reverse a list with multiple elements
    returnedList = list.reverse();
    assert.strictEqual(returnedList.head.val, 4, "Reverse a list with multiple elements should move the last element to the head");
    assert.strictEqual(returnedList.tail.val, 1, "Reverse a list with multiple elements should move the first element to the tail");
    assert.strictEqual(returnedList.head.next.val, 3, "Reverse a list with multiple elements should reverse the order of all elements");

    console.log("All tests passed!")
}

// Function to convert list values to an array for easier comparison
function listToArray(list) {
    let arr = [];
    let current = list.head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

function testDedup() {
    let list = new DoublyLinkedList();

    // Test 1: Empty list
    list.dedup();
    assert.deepStrictEqual(listToArray(list), [], 'List should remain empty');

    // Test 2: List with no duplicates
    list.push(1);
    list.push(2);
    list.push(3);
    list.dedup();
    assert.deepStrictEqual(listToArray(list), [1, 2, 3], 'List with unique elements should remain unchanged');

    // Reset list
    list = new DoublyLinkedList();

    // Test 3: List with all duplicates
    list.push(1);
    list.push(1);
    list.push(1);
    list.dedup();
    assert.deepStrictEqual(listToArray(list), [1], 'List should contain a single element');

    // Reset list
    list = new DoublyLinkedList();

    // Test 4: List with some duplicates
    list.push(1);
    list.push(2);
    list.push(2);
    list.push(3);
    list.push(3);
    list.push(3);
    list.dedup();
    assert.deepStrictEqual(listToArray(list), [1, 2, 3], 'Duplicates should be removed, unique elements should remain');

    // Reset list
    list = new DoublyLinkedList();

    // Test 5: List with duplicates at the beginning, middle, and end
    list.push(1);
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(3);
    list.push(4);
    list.push(4);
    list.dedup();
    assert.deepStrictEqual(listToArray(list), [1, 2, 3, 4], 'Duplicates at beginning, middle, and end should be removed');

    console.log('All dedup tests passed!');
}



function testBubbleSortNodes() {
    const list = new DoublyLinkedList();

    // Helper to add values for testing
    function addValues(values) {
        values.forEach(val => list.push(val));
    }

    // Helper to convert list to array for easy comparison
    function toArray() {
        let arr = [];
        let current = list.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }

    // Test with an unsorted list
    addValues([4, 3, 2, 1]);
    list.bubbleSortNodes();
    assert.deepStrictEqual(toArray(), [1, 2, 3, 4], "List should be sorted in ascending order");

    // Clear list for next test
    list.clear();

    // Test with a partially sorted list
    addValues([2, 1, 4, 3]);
    list.bubbleSortNodes();
    assert.deepStrictEqual(toArray(), [1, 2, 3, 4], "Partially sorted list should be fully sorted");

    // Clear list for next test
    list.clear();

    // Test with a list that's already in order
    addValues([1, 2, 3, 4]);
    list.bubbleSortNodes();
    assert.deepStrictEqual(toArray(), [1, 2, 3, 4], "Already sorted list should remain unchanged");

    // Test integrity of prev links
    let currentNode = list.head;
    let prevNode = null;
    while (currentNode) {
        assert.strictEqual(currentNode.prev, prevNode, "The prev link of the current node should point to the previous node");
        prevNode = currentNode;
        currentNode = currentNode.next;
    }

    console.log("All bubbleSortNodes tests passed successfully.");
}


function testBubbleSortValues() {
    const list = new DoublyLinkedList();

    // Helper to add values to the list
    function addValues(values) {
        values.forEach(val => list.push(val));
    }

    // Helper to convert the list to an array of values for easy comparison
    function listValuesToArray() {
        let valuesArray = [];
        let current = list.head;
        while (current) {
            valuesArray.push(current.val);
            current = current.next;
        }
        return valuesArray;
    }

    // Test with an unsorted list
    addValues([3, 1, 4, 2]);
    list.bubbleSortValues(); // Use your sorting method here
    assert.deepStrictEqual(listValuesToArray(), [1, 2, 3, 4], "Unsorted list should be sorted in ascending order");

    // Clear the list for the next test
    list.clear();

    // Test with a partially sorted list
    addValues([1, 3, 2, 4]);
    list.bubbleSortValues(); // Use your sorting method here
    assert.deepStrictEqual(listValuesToArray(), [1, 2, 3, 4], "Partially sorted list should be fully sorted");

    // Clear the list for the next test
    list.clear();

    // Test with a list that's already in order
    addValues([1, 2, 3, 4]);
    list.bubbleSortValues(); // Use your sorting method here
    assert.deepStrictEqual(listValuesToArray(), [1, 2, 3, 4], "Already sorted list should remain unchanged");

    console.log("All bubbleSortValues tests passed successfully.");
}

function testMergeAndSort() {
    // Helper function to add values to a list
    function fillList(list, values) {
        values.forEach(val => list.push(val));
    }

    // Helper function to convert a list to an array
    function listToArray(list) {
        const arr = [];
        let current = list.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }

    // Initialize two lists
    let list1 = new DoublyLinkedList();
    let list2 = new DoublyLinkedList();

    // Test 1: Merging with an empty list
    fillList(list1, [1, 3, 5]);
    list1.mergeAndSort(new DoublyLinkedList()); // Assuming mergeAndSort takes a DoublyLinkedList
    assert.deepStrictEqual(listToArray(list1), [1, 3, 5], "Merging with an empty list should keep the original list unchanged");

    // Test 2: Merging an empty list with a non-empty list
    list1 = new DoublyLinkedList(); // Reset list1 to be empty
    fillList(list2, [2, 4, 6]);
    list1.mergeAndSort(list2);
    assert.deepStrictEqual(listToArray(list1), [2, 4, 6], "Merging an empty list with a non-empty list should copy the non-empty list");

    // Test 3: Merging two non-empty lists
    list1 = new DoublyLinkedList();
    list2 = new DoublyLinkedList();
    fillList(list1, [3, 2, 1]);
    fillList(list2, [6, 5, 4]);
    list1.mergeAndSort(list2);
    assert.deepStrictEqual(listToArray(list1), [1, 2, 3, 4, 5, 6], "Merging two non-empty lists should result in a sorted combination of both lists");

    // Test 4: Merging lists where one list contains all elements less than the other
    list1 = new DoublyLinkedList();
    list2 = new DoublyLinkedList();
    fillList(list1, [1, 2, 3]);
    fillList(list2, [4, 5, 6]);
    list1.mergeAndSort(list2);
    assert.deepStrictEqual(listToArray(list1), [1, 2, 3, 4, 5, 6], "Merging lists with one having all elements less should result in a properly sorted list");

    console.log("All mergeAndSort tests passed successfully.");
}

testMergeAndSort();

//testBubbleSortValues();
//testBubbleSortNodes();
//testDedup();
// testReverse();
//testSearch();
//testDelete();
//testInsertAt();
// testPrintForwards();
// testPrintBackwards();
// testShift();
// testPop();
// testUnshift()
// testPush();

